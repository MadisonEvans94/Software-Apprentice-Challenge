import React from "react";

const Card = ({
	campaign,
	adset,
	creative,
	spend,
	impressions,
	clicks,
	results,
}) => {
	return (
		<div className="border border-info bg-white rounded-lg shadow-sm p-6 w-full mx-auto my-4">
			<div className="flex flex-col text-base text-info">
				<h2 className="font-semibold text-secondary text-xl mb-4">
					Campaign: {campaign}
				</h2>
				{/* Adset */}
				<div className="">{adset}</div>
				{/* Creative */}
				<div>{creative}</div>
				{/* spend */}
				<div>{spend}</div>
				{/* impressions */}
				<div>{impressions}</div>
				{/* clicks */}
				<div>{clicks}</div>
				{/* results */}
				<div className="text-base font-medium text-gray-600 col-span-2">
					Results: {results}
				</div>
			</div>
		</div>
	);
};

export default Card;
