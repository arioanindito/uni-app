import Image from "next/image";

export default function NewsImage(props) {
	return (
		<section class="flex-shrink-0 w-fit">
			<div class="flex items-center p-2 flex-col space-y-1 bg-white rounded-md">
				<Image
					src={props.src}
					width={130}
					height={100}
					className="rounded-lg"
					alt="News Image"
				/>
				<div class="w-32 font-light text-xs">{props.time}</div>
				<div class="w-32 font-semibold text-xs">{props.name}</div>
				<div class="w-32 font-light text-xs">{props.type}</div>
			</div>
		</section>
	);
}
