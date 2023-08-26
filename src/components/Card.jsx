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
		<div className="border border-info bg-white rounded-xl shadow-sm p-6 w-96 min-w-[360px] mx-auto h-fit">
			<div className="flex font-body flex-col h-full text-base text-info leading-7">
				<h3 className="font-semibold mx-auto text-center font-display text-info text-3xl mb-4">
					{campaign}
				</h3>
				<dl className="divide-y divide-gray-200">
					<div className="py-3 flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Adset
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 sm:text-right">
							{adset}
						</dd>
					</div>
					<div className=" py-3 flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Creative
						</dt>
						<dd className="mt-1  text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 sm:text-right">
							{creative}
						</dd>
					</div>
					<div className=" py-3 flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Spend
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 sm:text-right">
							${spend}
						</dd>
					</div>
					<div className=" py-3 flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Impressions
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 sm:text-right">
							{impressions}
						</dd>
					</div>
					<div className=" py-3 flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Clicks
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 sm:text-right">
							{clicks}
						</dd>
					</div>
					<div className=" py-3 flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
						<dt className="text-lg font-medium leading-6 text-info">
							Results
						</dt>
						<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 sm:text-right">
							{results}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};

export default Card;
