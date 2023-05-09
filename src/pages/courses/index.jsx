import UpcomingClass from "@/components/UpcomingClass";
import OngoingAssignment from "@/components/OngoingAssignment";
import Image from "next/image";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CourseCard from "@/components/CourseCard";

export default function Courses() {
	return (
		<div className="flex flex-col items-center pb-16 my-6 space-y-2 font-bold text-gray-700">
			<div className="flex flex-col w-full px-6 space-y-2">
				<div>All Courses</div>
				<CourseCard
					src={"/assets/mini-random-image-1.png"}
					name={"Software Engineering Dissertation Project"}
					code={"CIS6002"}
				/>
				<CourseCard
					src={"/assets/mini-random-image-2.png"}
					name={"Advanced Programming"}
					code={"CIS6003"}
				/>
				<CourseCard
					src={"/assets/mini-random-image-3.png"}
					name={"Professional and Ethical Issues in IT"}
					code={"CIS6004"}
				/>
				<CourseCard
					src={"/assets/mini-random-image-4.png"}
					name={"Computeational Intelligence"}
					code={"CIS6005"}
				/>
				<div>Ongoing Assignments</div>
				<OngoingAssignment
					title={"WRIT 1 - Coursework"}
					subtitle={"P&E Issues in IT"}
					date={"Today"}
					time={"11:59 PM"}
					status={"red"}
				/>
				<OngoingAssignment
					title={"WRIT 1 - Coursework"}
					subtitle={"P&E Issues in IT"}
					date={"Today"}
					time={"11:59 PM"}
					status={"green"}
				/>
				<OngoingAssignment
					title={"WRIT 1 - Coursework"}
					subtitle={"P&E Issues in IT"}
					date={"Today"}
					time={"11:59 PM"}
					status={"green"}
				/>
				<OngoingAssignment
					title={"WRIT 1 - Coursework"}
					subtitle={"P&E Issues in IT"}
					date={"Today"}
					time={"11:59 PM"}
					status={"green"}
				/>
			</div>
		</div>
	);
}
