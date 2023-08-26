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
			<div className="flex flex-col border text-base text-info leading-7">
				<h3 className="font-semibold text-secondary text-2xl mb-4">
					Campaign: {campaign}
				</h3>
				<dl className="divide-y divide-white/10">
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-info">
							Adset
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
							{adset}
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-info">
							{creative}
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
							Backend Developer
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-info">
							Spend
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
							${spend}
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-info">
							Impressions
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
							{impressions}
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-info">
							Clicks
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
							{clicks}
						</dd>
					</div>
					<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-sm font-medium leading-6 text-info">
							Results
						</dt>
						<dd className="mt-1 text-sm leading-6 text-gray-400 sm:col-span-2 sm:mt-0">
							{results}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default Card;
