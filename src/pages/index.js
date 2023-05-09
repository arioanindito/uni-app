import Link from "next/link";

export default function Home() {
	return (
		<>
			<div className="flex justify-center p-10 text-4xl font-bold">
				<div className="flex flex-col w-[35rem] mt-36 h-fit">
					<div className="flex mb-5 text-2xl">
						VUM <div className="ml-1 text-orange-500">Mobile</div>
					</div>
					<div className="flex">
						Stay Connected, Stay Ahead: Your University in Your Pocket.
					</div>
				</div>
			</div>
			<Link
				className="flex px-4 py-2 ml-10 text-white bg-orange-500 rounded w-fit"
				href="/login"
			>
				Sign In
			</Link>
		</>
	);
}
