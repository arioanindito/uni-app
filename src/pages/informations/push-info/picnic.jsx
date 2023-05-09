import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import Image from "next/image";

export default function Picnic() {
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
					<p>Dear students,</p>
					<br />
					<p>
						I hope this email finds you well and you are as excited as I am for
						the picnic tomorrow! I wanted to express my gratitude for your
						overwhelming interest. It is going to be a blast! 💯
					</p>
					<br />
					<p>
						Do not forget to bring your favorite barbeque treats and drinks to
						share with everyone. Lets make it a feast! 🎉 In terms of logistics,
						please make sure to mention that you are a student at the cash desk.
						You will get a discount on the entry fee, which will be 3 BGN
						instead of the regular price of 5 BGN. 💸
					</p>
					<br />
					<p>
						If you do not have a car, no worries! You can reach the park easily
						by taking bus 409.🚌
					</p>
					<br />
					<p>
						Lastly, the park is pretty big, so when you arrive, just mention my
						name, Savina Peneva, at the cash desk. The lovely lady there will
						give you directions of where our picnic spot is. 🖼
					</p>
					<br />
					<p>
						One more thing, the weather forecast looks promising, but lets keep
						our fingers crossed for a sunny day! In case there are any sudden
						changes, I will be sure to email you by 2:00 pm to let you know if
						we need to cancel. ☀ It s going to be a fantastic opportunity to
						relax, have fun and give our exchange students a proper send-off.
						Cannot wait to see you all tomorrow! 😊
					</p>
					<br />
					<p>Warm regards,</p>
				</div>

				<div>
					<Image
						src="/assets/student-activities.png"
						width={500}
						height={500}
						alt="welcome banner"
					/>
				</div>
			</div>
		</div>
	);
}
