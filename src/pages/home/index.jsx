import { useSession } from "next-auth/react";
import Image from "next/image";
import Card from "@/components/CardBig";
import NewsImage from "@/components/NewsImage";
import UpcomingClass from "@/components/UpcomingClass";
import OngoingAssignment from "@/components/OngoingAssignment";
import Link from "next/link";

export default function Home() {
	const { data } = useSession();
	return (
		<div className="flex flex-col items-center pb-16 my-6 space-y-2 font-bold text-gray-700">
			<div className="flex flex-col w-full px-6 space-y-2">
				<Card
					fullName={data?.user?.fullName}
					vumId={data?.user?.vumId}
					cardiffId={data?.user?.cardiffId}
				/>
				<div>News</div>
				<div className="flex space-x-2 overflow-x-auto">
					<NewsImage
						src={"https://vum.bg/wp-content/uploads/2023/03/1-scaled.jpg"}
						title={"International Day at VUM"}
						width={222}
						height={200}
					/>
					<NewsImage
						src={"https://vum.bg/wp-content/uploads/2023/03/travelife.png"}
						title={"VUM Students in Hospitality"}
						width={222}
						height={200}
					/>
					<NewsImage
						src={"https://vum.bg/wp-content/uploads/2023/02/DSC_0121.jpg"}
						title={"Incoming Mobility Students"}
						width={188}
						height={200}
					/>
				</div>
				<div>Upcoming Class</div>
				<div className="flex space-x-2 overflow-x-auto">
					<UpcomingClass
						src={"/assets/random-image-1.png"}
						time={"Tuesday - 6 PM"}
						name={"Professional and Ethical Issues in IT"}
						type={"Online"}
					/>
					<UpcomingClass
						src={"/assets/random-image-2.png"}
						time={"Wednesday - 6 PM"}
						name={"Advanced Programming"}
						type={"In Person"}
					/>
					<UpcomingClass
						src={"/assets/random-image-3.png"}
						time={"Thursday - 6 PM"}
						name={"Software Engineering Dissertation Project"}
						type={"In Person"}
					/>
				</div>
				<div>Ongoing Assignments</div>
				<OngoingAssignment
					title={"WRIT 1 - Coursework"}
					subtitle={"P&E Issues in IT"}
					date={"Today"}
					time={"11:59 PM"}
					status={"red"}
				/>
				<OngoingAssignment
					title={"WRIT 1 - Software Project"}
					subtitle={"Advanced Programming"}
					date={"Today"}
					time={"11:59 PM"}
					status={"green"}
				/>
				<OngoingAssignment
					title={"WRIT 1 - Dissertation Project"}
					subtitle={"SE Dissertation Project"}
					date={"Today"}
					time={"09:59 PM"}
					status={"green"}
				/>
				<OngoingAssignment
					title={"PRES 1 - Presentation"}
					subtitle={"SE Dissertation Project"}
					date={"Today"}
					time={"09:59 PM"}
					status={"green"}
				/>
			</div>
		</div>
	);
}
