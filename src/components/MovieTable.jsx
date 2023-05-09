import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

export default function MovieTable() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get(`/api/getAllMovie`)
			.then((res) => {
				setMovies(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div class="p-10 relative flex flex-col w-full overflow-x-auto sm:rounded-lg">
				<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" class="px-6 py-3">
								Movie name
							</th>
							<th scope="col" class="px-6 py-3">
								Director
							</th>
							<th scope="col" class="px-6 py-3">
								Photo URL
							</th>
							<th scope="col" class="px-6 py-3">
								Release Date
							</th>
							<th scope="col" class="px-6 py-3">
								Rating
							</th>
							<th scope="col" class="px-6 py-3">
								Details
							</th>
							<th scope="col" class="px-6 py-3">
								Review
							</th>
							<th scope="col" class="px-6 py-3">
								Action
							</th>
						</tr>
					</thead>
					{movies.map((movie) => (
						<tbody key={movie._id}>
							<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
								<th
									scope="row"
									class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{movie.movie_name}
								</th>
								<td class="px-6 py-4">{movie.director}</td>
								<td class="px-6 py-4">{movie.photo_url}</td>
								<td class="px-6 py-4">
									{moment(movie.release_date).utc().format("YYYY-MM-DD")}
								</td>
								<td class="px-6 py-4">{movie.rating}</td>
								<td class="px-6 py-4">{movie.details}</td>
								<td class="px-6 py-4 h-10">{movie.review}</td>
								<td class="flex items-center px-6 py-4 space-x-3">
									<a
										href="#"
										class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
									>
										Edit
									</a>
									<a
										href="#"
										class="font-medium text-red-600 dark:text-red-500 hover:underline"
									>
										Remove
									</a>
								</td>
							</tr>
						</tbody>
					))}
				</table>
			</div>
		</>
	);
}
