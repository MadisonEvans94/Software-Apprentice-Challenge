import React from "react";

const DataRow = ({ label, value }) => (
	<div className="py-3 flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
		<dt className="text-lg font-medium leading-6 text-info">{label}</dt>
		<dd className="mt-1 text-lg leading-6 text-gray-400 sm:col-span-2 sm:mt-0 sm:text-right">
			{value}
		</dd>
	</div>
);

const Card = ({
	campaign,
	adset,
	creative,
	spend,
	impressions,
	clicks,
	results,
}) => (
	<div className="border border-info bg-white rounded-xl shadow-sm p-6 w-80 min-w-[360px] mx-auto h-fit">
		<div className="flex font-body flex-col h-full text-base text-info leading-7">
			<h3 className="font-semibold mx-auto text-center font-display text-info text-3xl mb-4">
				{campaign}
			</h3>
			<dl className="divide-y divide-gray-200">
				<DataRow label="Adset" value={adset} />
				<DataRow label="Creative" value={creative} />
				<DataRow label="Spend" value={`$${spend}`} />
				<DataRow label="Impressions" value={impressions} />
				<DataRow label="Clicks" value={clicks} />
				<DataRow label="Results" value={results} />
			</dl>
		</div>
	</div>
);

export default Card;
