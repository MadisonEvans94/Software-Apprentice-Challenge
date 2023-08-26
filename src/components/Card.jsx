import React from "react";

const Card = () => {
	return (
		<div className="bg-white rounded-lg shadow-lg p-6 w-96 mx-auto my-4">
			<div className="grid grid-cols-2 gap-4">
				<div className="text-lg font-semibold text-blue-600 mb-4 col-span-2">
					Campaign: Summer Sale
				</div>
				<div className="text-base font-medium text-gray-600">
					Adset:
				</div>
				<div className="text-base text-gray-800">Social Media Ads</div>
				<div className="text-base font-medium text-gray-600">
					Creative:
				</div>
				<div className="text-base text-gray-800">
					Beach Vacation Promo
				</div>
				<div className="text-base font-medium text-gray-600">
					Spend:
				</div>
				<div className="text-base text-gray-800">1500</div>
				<div className="text-base font-medium text-gray-600">
					Impressions:
				</div>
				<div className="text-base text-gray-800">25000</div>
				<div className="text-base font-medium text-gray-600">
					Clicks:
				</div>
				<div className="text-base text-gray-800">1200</div>
				<div className="text-base font-medium text-gray-600 col-span-2">
					Results: (This would be fetched from Google Analytics based
					on matching criteria)
				</div>
			</div>
		</div>
	);
};

export default Card;
