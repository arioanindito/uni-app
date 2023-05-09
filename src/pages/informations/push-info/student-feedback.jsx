import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import Image from "next/image";

export default function StudentFeedback() {
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
						src="/assets/banner-student-feedback.png"
						width={500}
						height={500}
						alt="welcome banner"
					/>
				</div>

				<div className="px-1 text-sm font-light text-gray-700">
					<p>Dear SE Student,</p>
					<br />
					<p>
						This is a kind reminder for those of you who have not completed the
						VUM questionnaire below. It seeks your opinion on the modules
						delivered during the summer semester. It will take no more than 10
						minutes for you to provide your evaluation.
					</p>
					<br />
					<p>We will be happy to hear your voice!</p>
					<br />
					<p>Students affairs office,</p>
				</div>

				<div>
					<Image
						src="/assets/student-affairs.png"
						width={500}
						height={500}
						alt="welcome banner"
					/>
				</div>
			</div>
		</div>
	);
}
