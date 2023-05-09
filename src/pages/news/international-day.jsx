import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import Image from "next/image";

export default function InternationalDay() {
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
				<div className="flex justify-center">International Day at VUM</div>

				<div>
					<Image
						src="/assets/international-day.png"
						width={500}
						height={500}
						alt="welcome banner"
					/>
				</div>

				<div className="px-1 text-sm font-light text-gray-700">
					<p>By Ilda Kangoma – MBA student and VUM Admission Coordinator</p>
					<br />
					<p>
						On the 22nd of March 2023, VUM opened its doors and hosted
						International Day for all of its students. This event was very
						special and memorable as it marked the first time after COVID 19
						that students were united together to share about their countries
						culture, traditions, heritage and history. This event took place at
						VUM’s conference hall and the atmosphere was filled with a lot of
						love and harmony as both the mobility students and VUM’s full-time
						students got to witness how diverse VUM is! Students from a total of
						13 countries were present namely: Armenia, Albania, Bulgaria,
						Finland, India, Iran, Italy, Mozambique, The Philippines, Russia,
						Spain, Tajikistan and Ukraine.
					</p>
					<br />
					<p>
						To begin with, the event started off by a brief presentation about
						the history of Bulgaria presented by VUM’s Student Welfare
						coordinator Savina Peneva who then showed the audience a traditional
						Bulgarian dance together with some local students. This was then
						followed by the Ukrainian students who presented about Ukrainian
						history. After that, the Erasmus students from France shared about
						their traditions and music. Subsequently, the Mozambican students
						shared their traditional dish as well as a brief history of
						Mozambique. Thereafter, the mobility students from Armenia shared
						some songs and wowed the audience with their amazing traditional
						clothing and dances. Additionally, a VUM student who is half
						Albanian and half Bulgarian shared an interesting video about
						Albania.
					</p>
					<br />
					<p>
						Last but not least, the students from Tajikistan blew the minds of
						all present! They were all clothed with exquisite traditional wear
						and presented an intriguing and thoughtful presentation about
						Tajikistan. Right after the presentation, the students showcased
						their beautiful traditional dances and invited the audience to
						participate. Finally, it was time to munch! The students were all
						very excited to try the different dishes that were prepared by the
						wonderful students of VUM! Laughter filled the air as all attendees
						were overjoyed and surprised by how well the students can cook (even
						those who do not study in the culinary programmes)! Moreover, as the
						students from Tajikistan were celebrating their new year, the room
						was filled with a lot of joy as students showcased their moves.
					</p>
					<br />
					<p>
						Overall, this was an unforgettable experience! This event alone
						testifies the importance of diversity and inclusivity. Regardless of
						the colour of one’s skin, culture and religion, we are all one and
						united we shall persevere! The gallery on our Facebook page
					</p>
				</div>
			</div>
		</div>
	);
}
