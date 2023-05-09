import CardBigText from "@/components/CardBigText";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PushInfo from "@/components/PushInfo";
import Link from "next/link";

export default function Informations() {
	return (
		<div className="flex flex-col items-center pb-16 my-6 space-y-2 font-bold text-gray-700">
			<div className="flex flex-col w-full px-6 space-y-4">
				<Link href={"/informations/welcome-to-vum"}>
					<CardBigText />
				</Link>

				<div className="flex space-x-4">
					<Link
						href={"/informations/emergency"}
						className="flex flex-col justify-between w-full p-4 space-y-3 text-yellow-800 bg-orange-400 rounded h-36"
					>
						<div className="flex justify-between">
							<WbTwilightIcon />
						</div>
						<div className="flex w-16 text-xs font-light">
							Emergency Contacts
						</div>
					</Link>

					<Link
						href={"/informations/university"}
						className="flex flex-col justify-between w-full p-4 space-y-3 text-gray-100 bg-indigo-600 rounded h-36"
					>
						<div className="flex justify-between">
							<AccountBalanceIcon />
						</div>
						<div className="flex w-16 text-xs font-light">
							University Contacts
						</div>
					</Link>
				</div>

				<Link href={"/informations/residence-permit"}>
					<div className="flex flex-col justify-between h-32 p-4 text-yellow-800 bg-yellow-300 rounded">
						<div className="flex justify-between">
							<div className="flex font-medium">Residence Permit Documents</div>
						</div>

						<div className="flex justify-between">
							<div>
								<div class="w-full bg-yellow-100 rounded-full h-1.5 mb-1">
									<div class="bg-yellow-800 h-1.5 rounded-full w-[55%]"></div>
								</div>
								<div className="flex items-center text-xs font-light">
									5 out of 9 doucments completed
								</div>
							</div>
							<div className="flex font-medium">55 %</div>
						</div>
					</div>
				</Link>

				<Link href={"/informations/push-info/picnic"}>
					<PushInfo
						title={"Important Details about the picnic tomorrow"}
						sender={"VUM Student Welfare"}
					/>
				</Link>

				<Link href={"/informations/push-info/student-feedback"}>
					<PushInfo
						title={"Student feedback SE3 Summer semester 2022-23"}
						sender={"Student Affairs VUM"}
					/>
				</Link>

				<Link href={"/informations/push-info/erasmus"}>
					<PushInfo
						title={
							"Erasmus internship opportunities in Slovakia for April- June 2023"
						}
						sender={"SMP VUM"}
					/>
				</Link>
			</div>
		</div>
	);
}
