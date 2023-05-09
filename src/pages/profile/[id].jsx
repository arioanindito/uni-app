import { useSession } from "next-auth/react";

export default function Profile() {
	const { data } = useSession();

	return (
		<>
			<div>Profile Page</div>
		</>
	);
}
