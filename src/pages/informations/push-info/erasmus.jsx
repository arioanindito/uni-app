import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import Image from "next/image";

export default function Erasmus() {
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
						src="/assets/banner-picnic.png"
						width={500}
						height={500}
						alt="welcome banner"
					/>
				</div>

				<div className="px-1 text-sm font-light text-gray-700">
					<p>Dear Students,</p>
					<br />
					<p>Please take a look at these job opportunities:</p>
					<br />
					<p>www.ofoundation.nl, https://ofoundation.nl/ai-developer/</p>
					<br />
					<p>http://www.placementslovakia.com/partners@placementslovakia.com</p>
					<br />
					<p>https://www.animafestexperience.net/internshipsabroad/en/</p>
					<br />
					<p>Best regards,</p>
				</div>

				<div>
					<Image
						src="/assets/student-smp.png"
						width={500}
						height={500}
						alt="welcome banner"
					/>
				</div>
			</div>
		</div>
	);
}
