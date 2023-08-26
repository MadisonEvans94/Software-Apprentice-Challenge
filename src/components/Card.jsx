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
		<div className="border border-info bg-white rounded-xl shadow-sm p-6 w-fit mx-auto h-fit">
			<div className="flex font-body flex-col h-full text-base text-info leading-7">
				<h3 className="font-semibold font-display text-info text-5xl mb-4 max-w-[200px]">
					{campaign}
				</h3>
				<dl className="divide-y divide-gray-200">
					<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Adset
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 text-right">
							{adset}
						</dd>
					</div>
					<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Creative
						</dt>
						<dd className="mt-1  text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 text-right">
							{creative}
						</dd>
					</div>
					<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Spend
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 text-right">
							${spend}
						</dd>
					</div>
					<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Impressions
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 text-right">
							{impressions}
						</dd>
					</div>
					<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Clicks
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 text-right">
							{clicks}
						</dd>
					</div>
					<div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Results
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 text-right">
							{results}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default Card;
