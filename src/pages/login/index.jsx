// "use client";

// import { usePathname } from "next/navigation";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import Router from "next/router";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			await signIn("credentials", {
				callbackUrl: "/home",
				email,
				password,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<section className="flex flex-col justify-between h-screen bg-blue dark:bg-gray-900">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-16 bg-red md:h-screen lg:py-0">
					<div className="w-full bg-green dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div className="p-2 space-y-12 md:space-y-6 sm:p-8">
							<div className="space-y-1">
								<h1 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
									Welcome to VUM <span className="text-orange-500">Mobile</span>
								</h1>
								<h2 className="mr-24 text-sm font-normal leading-tight tracking-tight text-gray-400 md:text-2xl dark:text-white">
									Please enter your credentials below to start using app.
								</h2>
							</div>
							<form
								className="space-y-14 md:space-y-6"
								onSubmit={submitHandler}
							>
								<div className="space-y-4">
									<div className="flex flex-col">
										<div className="flex items-center text-[#245B8D] mb-2">
											<EmailIcon />
											<input
												type="email"
												name="email"
												id="email"
												className="text-gray-900 bg-gray-50 sm:text-sm block w-full p-2.5"
												placeholder="example@vumk.eu"
												required
												htmlFor="email"
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>
										<hr />
									</div>
									<div className="flex flex-col">
										<div className="flex items-center text-[#245B8D] mb-2">
											<LockIcon />
											<input
												type="password"
												name="password"
												id="password"
												placeholder="••••••••"
												className="text-gray-900 bg-gray-50 sm:text-sm block w-full p-2.5"
												required
												htmlFor="password"
												value={password}
												onChange={(e) => setPassword(e.target.value)}
											/>
										</div>
										<hr />
									</div>
								</div>

								<div className="space-y-4">
									<button
										type="submit"
										className="w-full px-5 py-4 text-sm font-medium text-center text-white bg-orange-500 rounded hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
									>
										Sign in
									</button>
									<p className="flex justify-center text-sm font-light text-gray-500 dark:text-gray-400">
										Porblem signing in?
										<Link
											href="/registration"
											className="ml-1 font-light text-orange-500 text-primary-600 hover:underline dark:text-primary-500"
										>
											Contact Us
										</Link>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
				<Image
					src="/assets/bottom-login.png"
					width={500}
					height={500}
					alt="bottom image"
				/>
			</section>
		</>
	);
}
