import "./App.css";
import Card from "./components/Card";
import { BsSearch as Search } from "react-icons/bs";
import { useState, useEffect } from "react";

// TODO:
// [ ] use React to create a view with cards for each ad with the following information: Campaign, Adset, Creative, Spend, Impressions, Clicks, Results
// [ ] use the data in the fakeDataSet from the provided API to populate the cards with standardized data
// [x] make cards sortable by spend, ascending and descending and clearable
// [x] cards should be searchable by campaign name

// TODO: Helper Functions
// [ ] create a function that accounts for different types of names
// [ ] handle google analytics

const cardData = [
	{
		campaign: "Summer Sale",
		adset: "Social Media Ads",
		creative: "Beach Vacation Promo",
		spend: 1500,
		impressions: 25000,
		clicks: 1200,
		results: 72,
	},
	{
		campaign: "Back to School",
		adset: "Display Ads",
		creative: "School Supplies Deal",
		spend: 1000,
		impressions: 18000,
		clicks: 800,
		results: 38,
	},
	{
		campaign: "Fall Fashion",
		adset: "Search Ads",
		creative: "Festive Sneak Peek",
		spend: 2000,
		impressions: 30000,
		clicks: 1500,
		results: 61,
	},
	{
		campaign: "Winter Clearance",
		adset: "Email Marketing",
		creative: "Winter Blowout",
		spend: 1700,
		impressions: 27000,
		clicks: 1300,
		results: 55,
	},
	{
		campaign: "Spring Fling",
		adset: "Influencer Marketing",
		creative: "Spring Styles",
		spend: 1100,
		impressions: 19000,
		clicks: 900,
		results: 42,
	},
	{
		campaign: "Tech Tuesday",
		adset: "Search Ads",
		creative: "Gadget Deals",
		spend: 1600,
		impressions: 26000,
		clicks: 1250,
		results: 50,
	},
	{
		campaign: "Fitness First",
		adset: "Social Media Ads",
		creative: "New Year, New You",
		spend: 1800,
		impressions: 29000,
		clicks: 1400,
		results: 65,
	},
	{
		campaign: "Black Friday",
		adset: "Display Ads",
		creative: "Holiday Savings",
		spend: 2200,
		impressions: 35000,
		clicks: 1600,
		results: 75,
	},
	{
		campaign: "Cyber Monday",
		adset: "Email Marketing",
		creative: "Online Exclusive",
		spend: 2100,
		impressions: 34000,
		clicks: 1550,
		results: 70,
	},
	{
		campaign: "Valentine's Day",
		adset: "Influencer Marketing",
		creative: "Love is in the Air",
		spend: 1300,
		impressions: 20000,
		clicks: 950,
		results: 45,
	},
];

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
					const data = await response.json();
					setData(data);
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

	let filteredCardData = cardData.filter((card) =>
		card.campaign.toLowerCase().includes(searchQuery.toLowerCase())
	);

	if (sortOrder === "asc") {
		filteredCardData = [...filteredCardData].sort(
			(a, b) => a.spend - b.spend
		);
	} else if (sortOrder === "desc") {
		filteredCardData = [...filteredCardData].sort(
			(a, b) => b.spend - a.spend
		);
	} else if (sortOrder === "clear") {
		filteredCardData = [...cardData];
	}

	return (
		<div className="bg-primary fixed w-full h-full overflow-auto">
			<div className="w-full h-full bg-primary flex flex-col">
				<Panel
					setSearchQuery={setSearchQuery}
					setSortOrder={setSortOrder}
				/>
				<CardList cardData={filteredCardData} />
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
			{cardData.map((card) => (
				<li key={card.campaign}>
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
