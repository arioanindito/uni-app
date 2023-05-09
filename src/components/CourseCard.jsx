import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function CourseCard(props) {
	return (
		<div className="flex items-center justify-between p-4 text-xs bg-white rounded-lg">
			<div className="flex">
				<div className="relative w-16 h-full">
					<Image src={props.src} width={70} height={70} alt="course image" />
				</div>
				<div className="flex flex-col justify-center ml-2">
					<div>{props.name}</div>
					<div className="font-light">{props.code}</div>
				</div>
			</div>
			<div className="text-[#245B8D]">
				<ChevronRightIcon />
			</div>
		</div>
	);
}
