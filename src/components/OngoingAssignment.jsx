export default function OngoingAssignment(props) {
	return (
		<div className="flex justify-between p-3 text-[10px] font-light bg-white rounded">
			<div className="flex flex-col">
				<div className="text-xs font-bold">{props.title}</div>
				<div className="">{props.subtitle}</div>
			</div>
			<div className="flex flex-col">
				<div className={`text-xs font-bold text-${props.status}-500`}>
					{props.date}
				</div>
				<div className="">{props.time}</div>
			</div>
		</div>
	);
}
