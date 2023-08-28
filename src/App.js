import React, { useState, useMemo } from "react";
import "./App.css";
import CardList from "./components/CardList";
import Panel from "./components/Panel";
import useDataServices from "./hooks/useDataServices";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOrder, setSortOrder] = useState(null);
	const { data } = useDataServices();

	// memoization for optimized filtering and sorting
	const filteredCardData = useMemo(() => {
		let filteredData = [];

		if (data) {
			// Filtering based on search query
			filteredData = data.filter((card) =>
				card.campaign.toLowerCase().includes(searchQuery.toLowerCase())
			);

			// Sorting based on sortOrder
			if (sortOrder === "asc") {
				filteredData.sort((a, b) => a.spend - b.spend);
			} else if (sortOrder === "desc") {
				filteredData.sort((a, b) => b.spend - a.spend);
			}
		}

		return filteredData;
	}, [data, searchQuery, sortOrder]);

	return (
		<div className="bg-primary fixed w-full h-full overflow-auto">
			<div className="w-full h-full bg-primary flex flex-col">
				<Panel
					setSearchQuery={setSearchQuery}
					setSortOrder={setSortOrder}
				/>
				<h1 className="w-fit font-display text-4xl lg:text-7xl font-semibold mt-6 mb-2 mx-auto text-secondary">
					Ad Campaigns
				</h1>
				{data && <CardList cardData={filteredCardData} />}
			</div>
		</div>
	);
}

export default App;
