import { useSession } from "next-auth/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Link from "next/link";

export default function Navbar() {
	const { data } = useSession();

	return (
		<>
			{data?.user ? (
				<div class="fixed bg-gray-50 bottom-0 left-0 z-50 w-full h-16 border-t dark:bg-gray-700 dark:border-gray-600">
					<div class="grid text-[#245B8D] h-full max-w-lg grid-cols-5 mx-auto font-medium">
						<Link
							href={`/home`}
							type="button"
							class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
						>
							<HomeOutlinedIcon
								className="w-6 h-6 mb-1 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
								aria-hidden="true"
							/>
						</Link>
						<Link
							href={`/courses`}
							type="button"
							class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
						>
							<EventNoteOutlinedIcon
								className="w-6 h-6 mb-1 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
								aria-hidden="true"
							/>
						</Link>
						<Link
							href={`/informations`}
							type="button"
							class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
						>
							<InfoOutlinedIcon
								className="w-6 h-6 mb-1 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
								aria-hidden="true"
							/>
						</Link>
						<Link
							href={"/calendar"}
							type="button"
							class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
						>
							<CalendarMonthOutlinedIcon
								className="w-6 h-6 mb-1 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
								aria-hidden="true"
							/>
						</Link>
						<Link
							href={`/profile`}
							// href={`/profile/${data?.user?._id}`}
							type="button"
							class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
						>
							<PersonOutlineOutlinedIcon
								className="w-6 h-6 mb-1 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
								aria-hidden="true"
							/>
						</Link>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
