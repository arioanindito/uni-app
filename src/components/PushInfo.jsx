export default function PushInfo(props) {
	return (
		<div className="flex flex-col justify-between p-4 space-y-3 text-blue-900 bg-white rounded h-fit">
			<div className="flex justify-between">
				<div className="flex font-medium w-52">{props.title}</div>
				<div className="px-2 py-1 text-xs font-light bg-blue-100 rounded h-fit">
					DISMISS
				</div>
			</div>

			<div className="flex justify-between">
				<div>
					<div className="flex items-center text-xs font-light">
						{props.sender}
					</div>
				</div>
			</div>
		</div>
	);
}
