export const standardizeAds = (ads, platform) => {
	return ads.map((ad) => ({
		campaign: ad.campaign || ad.campaign_name || ad.utm_campaign,
		adset:
			ad.media_buy_name ||
			ad.ad_group ||
			ad.ad_squad_name ||
			ad.utm_medium,
		creative:
			ad.ad_name || ad.image_name || ad.creative_name || ad.utm_content,
		spend: ad.spend || ad.cost,
		impressions: ad.impressions,
		clicks: ad.clicks || ad.post_clicks,
		platform,
	}));
};

export const mergeAnalytics = (ads, analytics) => {
	const aggregatedAnalytics = {};
	let noDataCount = 0;

	analytics.forEach((analytic) => {
		const key = `${analytic.utm_campaign}-${analytic.utm_medium}-${analytic.utm_content}`;
		if (aggregatedAnalytics[key]) {
			aggregatedAnalytics[key] += analytic.results;
		} else {
			aggregatedAnalytics[key] = analytic.results;
		}
	});

	const newAds = ads.map((ad) => {
		const key = `${ad.campaign}-${ad.adset}-${ad.creative}`;
		if (aggregatedAnalytics[key]) {
			return { ...ad, results: aggregatedAnalytics[key] };
		} else {
			noDataCount++;
			return { ...ad, results: "No Data" };
		}
	});

	console.log(`Number of ads with 'No Data': ${noDataCount}`);
	return newAds;
};
