import Image from "next/image";

export default function NewsImage(props) {
	return (
		<section class="flex-shrink-0">
			<div class="relative">
				<Image
					src={props.src}
					width={props.width}
					height={props.height}
					className="rounded-lg"
					alt="News Image"
				/>
				<div class="absolute font-bold text-xs text-white bottom-1 left-2">
					{props.title}
				</div>
			</div>
		</section>
	);
}
