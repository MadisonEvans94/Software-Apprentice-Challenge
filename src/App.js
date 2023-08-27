import "./App.css";
import Card from "./components/Card";
import Panel from "./components/Panel";
import { useState } from "react";
import useDataServices from "./hooks/useDataServices";

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOrder, setSortOrder] = useState(null);
	const { data } = useDataServices();

	let filteredCardData = [];

	if (data) {
		// Check if data is not null
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
				{data && <CardList cardData={filteredCardData} />}
			</div>
		</div>
	);
}

export default App;

const CardList = ({ cardData }) => {
	return (
		<ul className="mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 py-8">
			{/* TODO: Fix the index */}
			{cardData.map((card, i) => (
				<li key={i}>
					<Card
						campaign={card.campaign}
						adset={card.adset}
						creative={card.creative}
						spend={card.spend}
						impressions={card.impressions}
						clicks={card.clicks}
						results={card.results}
					/>
				</li>
			))}
		</ul>
	);
};
