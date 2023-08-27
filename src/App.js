import "./App.css";
import CardList from "./components/CardList";
import Panel from "./components/Panel";
import { useState } from "react";
import useDataServices from "./hooks/useDataServices";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOrder, setSortOrder] = useState(null);
	const { data } = useDataServices();

	let filteredCardData = [];

	if (data) {
		filteredCardData = data.filter((card) =>
			card.campaign.toLowerCase().includes(searchQuery.toLowerCase())
		);
		if (sortOrder === "asc") {
			filteredCardData.sort((a, b) => a.spend - b.spend);
		} else if (sortOrder === "desc") {
			filteredCardData.sort((a, b) => b.spend - a.spend);
		} else if (sortOrder === "clear") {
			filteredCardData = [...data];
		}
	}

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
