import Image from "next/image";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SmallInfoComps from "@/components/SmallInfoComps";

export default function University() {
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
						src="/assets/banner-university.png"
						width={500}
						height={500}
						alt="emergency banner"
					/>
				</div>

				<SmallInfoComps
					title={"Marketing and Admission"}
					address={"13A Oborishte Street, Varna, 9000, Bulgaria"}
					office={"Office: 101, 102"}
				/>

				<SmallInfoComps
					title={"Rector Office"}
					address={"3, Bulgaria Street, Dobrich, 9300, Bulgaria"}
				/>

				<SmallInfoComps
					title={"Student Affairs"}
					address={"13A Oborishte Street, Varna, 9000, Bulgaria"}
					office={"Office: 401"}
				/>

				<SmallInfoComps
					title={"Career Center"}
					address={"3, Bulgaria Street, Dobrich, 9300, Bulgaria"}
					office={"Office: 11"}
				/>

				<SmallInfoComps
					title={"Student Welfare"}
					address={
						"Dobrich Campus. 3, Bulgaria Street, Dobrich, 9300, Bulgaria. Office: 11"
					}
					office={
						"Varna Campus 13A Oborishte Street, Varna, 9000, Bulgaria. Office: 101"
					}
				/>
			</div>
		</div>
	);
}
