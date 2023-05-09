import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function App({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<div className="flex flex-col h-fit bg-gray-50">
				<Component {...pageProps} />
			</div>
			<Navbar />
		</SessionProvider>
	);
}
