import "./App.css";
import Card from "./components/Card";

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
	return (
		<div className="App">
			<div className="w-full h-screen bg-primary">
				<Panel />
				<CardList cardData={cardData} />
			</div>
		</div>
	);
}

export default App;
const Panel = () => {
	return (
		<div className="border-b border-info bg-white h-36 w-full p-4">
			<div className="flex flex-row">
				<input
					type="text"
					className="border border-info w-full rounded-lg p-2"
				/>
				<img src="" alt="" />
			</div>
		</div>
	);
};
const CardList = ({ cardData }) => {
	return (
		<ul className="mx-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
