import { useSession } from "next-auth/react";
import Image from "next/image";
import { signOut } from "next-auth/react";
import Navbar from "@/components/Navbar";

export default function Profile() {
	const { data } = useSession();
	return (
		<>
			<div className="flex flex-col text-[#245B8D] items-center space-y-2 pb-16">
				<div className="flex flex-col items-center justify-center mt-10 space-y-2 w-fit">
					<div className="w-16 h-16">
						<Image
							src="/assets/default-avatar.png"
							width={500}
							height={500}
							alt="bottom image"
						/>
					</div>
					<div className="font-semibold">{data?.user?.fullName}</div>
				</div>

				<div className="flex flex-col w-full px-6 py-4 space-y-2 text-sm">
					<div className="flex flex-col w-full p-4 space-y-1 bg-white rounded">
						<span className="font-semibold">PRIMARY EMAIL</span>
						<span>{data?.user?.email}</span>
					</div>

					<div className="flex flex-col w-full p-4 space-y-1 bg-white rounded">
						<span className="font-semibold">SECONDARY EMAIL</span>
						<span>{data?.user?.email}</span>
					</div>

					<div className="flex flex-col w-full p-4 space-y-1 bg-white rounded">
						<span className="font-semibold">VUM STUDENT ID</span>
						<span>{data?.user?.vumId}</span>
					</div>

					<div className="flex flex-col w-full p-4 space-y-1 bg-white rounded">
						<span className="font-semibold">CARDIFF MET STUDENT ID</span>
						<span>{data?.user?.cardiffId}</span>
					</div>

					<div className="flex flex-col w-full p-4 space-y-1 bg-white rounded">
						<span className="font-semibold">PROGRAM</span>
						<span>{data?.user?.program}</span>
					</div>
				</div>

				<div className="flex flex-col w-full px-6 py-4 space-y-2 text-sm">
					<button
						type="submit"
						className="w-full px-5 py-4 text-sm font-medium text-center text-white bg-red-500 rounded hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						onClick={() => signOut()}
					>
						Sign Out
					</button>
				</div>
			</div>
		</>
	);
}
