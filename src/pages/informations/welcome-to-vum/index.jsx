import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Link from "next/link";
import Image from "next/image";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import GroupsIcon from "@mui/icons-material/Groups";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";

export default function WelcomeToVUM() {
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
						src="/assets/banner-welcome.png"
						width={500}
						height={500}
						alt="welcome banner"
					/>
				</div>

				<div className="px-1 text-sm font-light text-gray-700">
					<p>Dear Ario, </p>
					<p>
						<br />
						On behalf of the Student Affairs office - campus Varna, we would
						like to welcome you to the 2022-2023 academic year at Varna
						University of Management!
					</p>
					<br />
					<p>
						It is a pleasure to have you in our University community. Your
						process of transition to our university should be smooth and
						enjoyable, and we are here to support you every step of the way.
					</p>
				</div>

				<div className="flex px-1">
					<div className="flex w-fit h-fit text-[#245B8D] pr-4">
						<EditCalendarIcon fontSize="large" />
					</div>
					<div className="">
						<div className="text-orange-500">Semester Schedule</div>
						<div className="text-sm font-light text-gray-700">
							<br />
							<p>
								Your schedule is accessible on our website here. Once you have
								followed the link SE PROGRAMME WINTER SEMESTER SCHEDULE, you
								will see your programme displayed on the sheet named SE1(G6). G6
								stands for your language group.
							</p>
							<br />
							<p>
								In case there are any changes in the schedule, you will be
								promptly notified by email and your semester schedule will be
								amended correspondingly.
							</p>
						</div>
					</div>
				</div>

				<div className="flex px-1">
					<div className="flex w-fit h-fit text-[#245B8D] pr-4">
						<GroupsIcon fontSize="large" />
					</div>
					<div className="">
						<div className="text-orange-500">Induction Session</div>
						<div className="text-sm font-light text-gray-700">
							<br />
							<p>
								The date and time for your induction session will be advised
								additionally. We plan to deliver the induction session in the
								week commencing 28 September 2020.
							</p>
						</div>
					</div>
				</div>

				<div className="flex px-1">
					<div className="flex w-fit h-fit text-[#245B8D] pr-4">
						<DataSaverOffIcon fontSize="large" />
					</div>
					<div className="">
						<div className="text-orange-500">E-learning Centre</div>
						<div className="text-sm font-light text-gray-700">
							<br />
							<p>
								You can access the web page of your administrative group at
								dec.vumk.eu. Once you have typed the module name in the search
								box, you will be redirected to the home page of your module.
							</p>
							<br />
							<p>
								On the module home page, you can find the module handbook,
								assignments and learning resources.You will receive by email
								your credentials to the E-learning Centre during the week
								commencing 28 September 2020.
							</p>
						</div>
					</div>
				</div>

				<div className="flex px-1">
					<div className="flex w-fit h-fit text-[#245B8D] pr-4">
						<AssignmentLateIcon fontSize="large" />
					</div>
					<div className="">
						<div className="text-orange-500">
							Important Documents and Regulations
						</div>
						<div className="text-sm font-light text-gray-700">
							<br />
							<p>
								Important documents and Regulations can be found on the Student
								Affairs section of our{" "}
								<Link
									className="underline"
									href="https://vum.bg/student-affairs-office/"
								>
									website here
								</Link>
								.
							</p>
							<br />
							<p>
								*Important: Please always opt for the English version for the
								most up-to-date information!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
