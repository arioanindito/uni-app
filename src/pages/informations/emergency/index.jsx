import Image from "next/image";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SmallInfoComps from "@/components/SmallInfoComps";

export default function Emergency() {
	return (
		<div className="flex flex-col items-center pb-16 my-6 space-y-2 font-bold text-gray-700">
			<div className="flex flex-col w-full px-6 space-y-4">
				<Link
					href={"/informations"}
					className="flex items-center justify-start w-fit"
				>
					<div>
						<ChevronLeftIcon className="text-[#245B8D]" />
					</div>
					<div>Back</div>
				</Link>

				<div>
					<Image
						src="/assets/banner-emergency.png"
						width={500}
						height={500}
						alt="emergency banner"
					/>
				</div>

				<SmallInfoComps
					title={"Regional Police Department"}
					phone={"+359 52 615 166"}
				/>

				<SmallInfoComps title={"Ambulance"} phone={"150"} />

				<SmallInfoComps title={"Fire / Rescue"} phone={"160"} />

				<SmallInfoComps title={"Police"} phone={"166"} />

				<SmallInfoComps
					title={"BULSAR (Bulgarian Black Sea Search & Rescue)"}
					phone={"161 / 088"}
				/>
			</div>
		</div>
	);
}
