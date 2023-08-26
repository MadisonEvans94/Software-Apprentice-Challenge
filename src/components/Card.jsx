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
		<div className="border bg-white rounded-lg shadow-lg p-6 w-full mx-auto my-4">
			<div className="grid grid-cols-1 text-base text-gray-800">
				<div className="text-lg font-semibold text-blue-600 mb-4 col-span-2">
					Campaign: {campaign}
				</div>
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
