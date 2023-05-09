import Link from "next/link";

export default function Unauthorized() {
	return (
		<>
			<div class="h-screen w-full bg-gray-50 flex items-center">
				<div class="container flex flex-col items-center justify-center text-gray-700">
					<div class="max-w-md">
						<div class="text-5xl font-dark font-bold">401</div>
						<p class="text-2xl mb-40 md:text-3xl font-light leading-normal">
							Sorry you couldn&apos;t access this page.{" "}
						</p>
						<p class="mb-8">
							But dont worry, you can find plenty of other things on our
							homepage.
						</p>
						<Link href="/">
							<div class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
								Back to homepage
							</div>
						</Link>
					</div>
					<div class="max-w-lg"></div>
				</div>
			</div>
		</>
	);
}
