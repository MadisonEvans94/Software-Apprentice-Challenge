import React from "react";
import Card from "./Card";
const CardList = ({ cardData }) => {
	return (
		<ul className="mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 py-8">
			{cardData?.map((card, i) => (
				<li
					key={`${card.campaign}_${card.adset}_${card.creative}_${i}`}
				>
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

export default CardList;
