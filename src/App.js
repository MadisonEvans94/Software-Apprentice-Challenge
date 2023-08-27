import "./App.css";
import Card from "./components/Card";
import { BsSearch as Search } from "react-icons/bs";
import { useState, useEffect } from "react";
import { standardizeAds, mergeAnalytics } from "./utility";
// TODO:
// [ ] use React to create a view with cards for each ad with the following information: Campaign, Adset, Creative, Spend, Impressions, Clicks, Results
// [ ] use the data in the fakeDataSet from the provided API to populate the cards with standardized data
// [x] make cards sortable by spend, ascending and descending and clearable
// [x] cards should be searchable by campaign name

// TODO: Helper Functions
// [ ] create a function that accounts for different types of names
// [ ] handle google analytics

function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [sortOrder, setSortOrder] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(
					"http://localhost:3000/fakeDataSet"
				);
				if (response.ok) {
					const rawData = await response.json();

					// Standardize and merge data
					const standardizedFacebookAds = standardizeAds(
						rawData.facebook_ads,
						"Facebook"
					);
					const standardizedTwitterAds = standardizeAds(
						rawData.twitter_ads,
						"Twitter"
					);
					const standardizedSnapchatAds = standardizeAds(
						rawData.snapchat_ads,
						"Snapchat"
					);
					const allAds = [
						...standardizedFacebookAds,
						...standardizedTwitterAds,
						...standardizedSnapchatAds,
					];
					mergeAnalytics(allAds, rawData.google_analytics);

					setData(allAds); // Set the processed data
				} else {
					console.error(
						"Failed to fetch data:",
						response.status,
						response.statusText
					);
				}
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			}
		}
		fetchData();
	}, []);

	console.log(data);
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
		<div className="flex border-b border-info bg-white h-36 w-full p-4">
			<div className="flex flex-row my-auto mx-auto max-w-[600px] w-full">
				<select
					className="mr-4 border border-info rounded-lg py-2 px-4"
					onChange={(e) => setSortOrder(e.target.value)}
				>
					<option value="">Sort by Spend</option>
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
