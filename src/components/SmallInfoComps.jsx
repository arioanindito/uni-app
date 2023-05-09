export default function SmallInfoComps(props) {
	return (
		<div className="p-3 space-y-2 text-sm bg-white rounded">
			<div className="">{props?.title}</div>
			<div className="font-light">{props?.address}</div>
			<div className="font-light">{props?.office}</div>
			<div className="font-light">{props?.phone}</div>
		</div>
	);
}
