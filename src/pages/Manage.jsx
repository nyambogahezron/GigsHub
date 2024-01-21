import SearchBox from "../components/SearchBox";
import Header from "../components/PageHeader";
import JobListData from "../components/data";

const ManageJobs = () => {
	return (
		<main>
			<SearchBox />

			<div className="mx-4">
				<div className="bg-gray-50 border border-gray-200 p-10 rounded">
					<Header headerTitle="Manage Gigs" />

					<table className="w-full table-auto rounded-sm">
						<tbody>
							{JobListData.map((item) => {
								const { id, image, title, company, location } =
									item;
								return (
									<tr key={id} className="border-gray-300">
										<td className="px-4 py-8 border-t border-b border-gray-300 text-lg">
											<a href="show.html">{title}</a>
										</td>
										<td className="px-4 py-8 border-t border-b border-gray-300 text-lg">
											<a
												href="edit.html"
												className="text-blue-400 px-6 py-2 rounded-xl"
											>
												<i className="fa-solid fa-pen-to-square"></i>{" "}
												Edit
											</a>
										</td>
										<td className="px-4 py-8 border-t border-b border-gray-300 text-lg">
											<form action="">
												<button className="text-red-600">
													<i className="fa-solid fa-trash-can"></i>
													Delete
												</button>
											</form>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
};
export default ManageJobs;
