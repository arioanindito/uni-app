import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import Image from "next/image";

export default function ResidencePermit() {
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
						src="/assets/banner-residence.png"
						width={500}
						height={500}
						alt="welcome banner"
					/>
				</div>

				<div className="px-1 text-sm font-light text-gray-700">
					<p>Dear Students,</p>
					<br />
					<p>Greetings from the Student Welfare Department!</p>
					<br />
					<p>
						Firstly, let me introduce myself for the new students - my name is
						Savina Peneva and I will be assisting you regarding your residence
						permit registration - you can find me in office 410d. 😊
					</p>
					<br />
					<p>
						I would like to ask you to read carefully the information below that
						is related to your residence permits applications:
					</p>
					<br />
					<p>
						You must keep a close eye on your validity and bear in mind that you
						have to apply for renewal no later than 2 weeks prior to the
						expiration date of the permit in order to avoid a penalty. Please
						contact me at least 1 month before your card expires, so that I can
						prepare the necessary documents in a timely manner.
					</p>
					<br />
					<p>
						I would like to kindly ask you as soon as you have your card to send
						me photos of it - front and back! Thank you in advance! :)
					</p>
				</div>
			</div>
		</div>
	);
}
