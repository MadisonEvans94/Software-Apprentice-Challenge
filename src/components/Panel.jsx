import React from "react";
import { BsSearch as Search } from "react-icons/bs";
const Panel = ({ setSearchQuery, setSortOrder }) => {
	return (
		<div className="flex border-b border-info bg-white max-h-36 w-full p-4">
			<div className="flex flex-row my-auto mx-auto max-w-[600px] w-full">
				<select
					className="mr-4 border border-info rounded-lg py-2 px-4"
					onChange={(e) => setSortOrder(e.target.value)}
				>
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
					<option value="clear">Clear</option>
				</select>
				<input
					type="text"
					className="border border-info w-full rounded-lg py-2 px-4"
					onChange={(e) => setSearchQuery(e.target.value)}
					aria-label="Search Campaigns"
				/>
				<Search
					size="2em"
					className="w-10 h-full my-auto ml-4 text-secondary"
				/>
			</div>
		</div>
	);
};

export default Panel;
