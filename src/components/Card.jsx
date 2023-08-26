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
		<div className="border bg-white rounded-lg shadow-lg p-6 w-96 mx-auto my-4">
			<div className="grid grid-cols-2 gap-4">
				<div className="text-lg font-semibold text-blue-600 mb-4 col-span-2">
					Campaign: {campaign}
				</div>
				<div className="text-base font-medium text-gray-600">
					Adset:
				</div>
				<div className="text-base text-gray-800">{adset}</div>
				<div className="text-base font-medium text-gray-600">
					Creative:
				</div>
				<div className="text-base text-gray-800">{creative}</div>
				<div className="text-base font-medium text-gray-600">
					Spend:
				</div>
				<div className="text-base text-gray-800">{spend}</div>
				<div className="text-base font-medium text-gray-600">
					Impressions:
				</div>
				<div className="text-base text-gray-800">{impressions}</div>
				<div className="text-base font-medium text-gray-600">
					Clicks:
				</div>
				<div className="text-base text-gray-800">{clicks}</div>
				<div className="text-base font-medium text-gray-600 col-span-2">
					Results: {results}
				</div>
			</div>
		</div>
	);
};

export default Card;
