import "./App.css";
import Card from "./components/Card";
import { BsSearch as Search } from "react-icons/bs";
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
					className="w-10 h-full my-auto ml-4 text-info"
				/>
			</div>
		</div>
	);
};
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
