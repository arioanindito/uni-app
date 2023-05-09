import Image from "next/image";

export default function CardBigText(props) {
	return (
		<div className="flex flex-col pb-4 pl-4 space-y-3 text-white bg-blue-500 rounded">
			<div className="flex justify-between">
				<div className="flex mt-4 font-medium">Welcome to VUM!</div>
				<div className="flex w-[160px] h-[73px]">
					<Image
						src="/assets/dots.png"
						width={500}
						height={500}
						alt="bottom image"
					/>
				</div>
			</div>

			<div className="flex w-64 text-xs font-light">
				We have prepared this short summary as an easy-to-use information source
				just for you!
			</div>
		</div>
	);
}
