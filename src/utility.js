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
	ads.forEach((ad, index) => {
		const matchingAnalytics = analytics.find(
			(analytic) =>
				analytic.utm_campaign === ad.campaign &&
				analytic.utm_medium === ad.adset &&
				analytic.utm_content === ad.creative
		);
		if (matchingAnalytics) {
			console.log(
				`Match found for ad index ${index}:`,
				matchingAnalytics
			);
			ad.results = matchingAnalytics.results;
		} else {
			console.log(`No match found for ad index ${index}`);
			ad.results = "No Data";
		}
	});
};
