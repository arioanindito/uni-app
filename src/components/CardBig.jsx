import Image from "next/image";

export default function CardBig(props) {
	return (
		<div className="flex flex-col pb-4 pl-4 bg-[#245B8D] rounded text-white space-y-3">
			<div className="flex justify-between">
				<div className="flex w-16 h-16 mt-4">
					<Image
						src="/assets/default-avatar.png"
						width={500}
						height={500}
						alt="bottom image"
					/>
				</div>
				<div className="flex w-[160px] h-[73px]">
					<Image
						src="/assets/dots.png"
						width={500}
						height={500}
						alt="bottom image"
					/>
				</div>
			</div>
			<div>
				<div className="flex font-semibold">{props.fullName}</div>
				<div className="flex font-light">
					{props.vumId} / {props.cardiffId}
				</div>
			</div>
		</div>
	);
}
