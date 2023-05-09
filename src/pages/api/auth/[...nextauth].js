import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs/dist/bcrypt";

import User from "../../../models/UserModel";
import { connectToMongo } from "@/libs/MongoConnect";

export default NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials, req, res) {
				await connectToMongo();

				const { email, password } = credentials;

				const user = await User.findOne({ email });

				if (!user) {
					throw new Error("No user found");
				}

				const isPasswordCorrect = await bcrypt.compare(password, user.password);

				if (!isPasswordCorrect) {
					throw new Error("Incorrect password");
				}

				return user;
			},
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async session({ session, token }) {
			session.user = token.user;
			return session;
		},
		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
	},
});
