import { USER } from "../types/user";

// app/users/page.tsx
export default async function UsersPage() {
	const res = await fetch("/api/v1/users", {
		cache: "no-store",
	});
	const users: USER[] = await res.json();

	return (
		<div>
			<h1>Users</h1>
			<ul>
				{users.map((u: USER) => (
					<li key={u.id}>{u.name}</li>
				))}
			</ul>
		</div>
	);
}
