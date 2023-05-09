import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import router from "next/router";

export default function Register() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [role, setRole] = useState("student");
	const [vumId, setVumId] = useState("");
	const [cardiffId, setCardiffId] = useState("");
	const [program, setProgram] = useState("");

	const onOptionChangeHandler = (event) => {
		setRole(event.target.value);
	};

	const submitForm = async (e) => {
		e.preventDefault();

		try {
			const { data } = await axios.post("/api/register", {
				fullName,
				email,
				password,
				role,
				vumId,
				cardiffId,
				program,
			});
			router.push("/login");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<section class="bg-gray-50 dark:bg-gray-900">
				<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
						<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
								Create an account
							</h1>
							<form class="space-y-4 md:space-y-6" onSubmit={submitForm}>
								<div>
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your Full Name
									</label>
									<input
										type="text"
										name="fullName"
										id="fullName"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Full Name"
										required
										htmlFor="fullName"
										value={fullName}
										onChange={(e) => setFullName(e.target.value)}
									/>
								</div>
								<div>
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Your email
									</label>
									<input
										type="email"
										name="email"
										id="email"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="youremail@email.com"
										required
										htmlFor="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div>
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Password
									</label>
									<input
										type="password"
										name="password"
										id="password"
										placeholder="••••••••"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										required
										htmlFor="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div>
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Role
									</label>
									<select
										htmlFor="role"
										type="text"
										placeholder="role"
										onChange={onOptionChangeHandler}
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									>
										<option value="student">Student</option>
										<option value="lecturer">Lecturer</option>
										<option value="admin">Admin</option>
									</select>
								</div>

								<div>
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										VUM Student ID
									</label>
									<input
										type="text"
										name="vumId"
										id="vumId"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="VUM Student ID"
										required
										htmlFor="vumId"
										value={vumId}
										onChange={(e) => setVumId(e.target.value)}
									/>
								</div>

								<div>
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Cardiff Met Student ID
									</label>
									<input
										type="text"
										name="cardiffId"
										id="cardiffId"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Cardiff Student ID"
										required
										htmlFor="cardiffId"
										value={cardiffId}
										onChange={(e) => setCardiffId(e.target.value)}
									/>
								</div>

								<div>
									<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
										Program
									</label>
									<input
										type="text"
										name="program"
										id="program"
										class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Program"
										required
										htmlFor="program"
										value={program}
										onChange={(e) => setProgram(e.target.value)}
									/>
								</div>

								<button
									type="submit"
									class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
								>
									Create an account
								</button>
								<p class="text-sm font-light text-gray-500 dark:text-gray-400">
									Already have an account?{" "}
									<Link
										href="/login"
										class="font-medium text-primary-600 hover:underline dark:text-primary-500"
									>
										Login here
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
