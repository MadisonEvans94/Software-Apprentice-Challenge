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
];

function App() {
	return (
		<div className="App">
			<CardList cardData={cardData} />
		</div>
	);
}

export default App;
const CardList = ({ cardData }) => {
	return (
		<ul>
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
