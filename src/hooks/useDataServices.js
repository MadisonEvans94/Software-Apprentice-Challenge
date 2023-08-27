import { useState, useEffect } from "react";

const standardizeAds = (ads, platform) => {
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

const mergeAnalytics = (ads, analytics) => {
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

const useDataServices = () => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/fakeDataSet"
				);
				if (response.ok) {
					const rawData = await response.json();

					const standardizedFacebookAds = standardizeAds(
						rawData.facebook_ads,
						"Facebook"
					);
					const standardizedTwitterAds = standardizeAds(
						rawData.twitter_ads,
						"Twitter"
					);
					const standardizedSnapchatAds = standardizeAds(
						rawData.snapchat_ads,
						"Snapchat"
					);

					const allAds = [
						...standardizedFacebookAds,
						...standardizedTwitterAds,
						...standardizedSnapchatAds,
					];

					const mergedAds = mergeAnalytics(
						allAds,
						rawData.google_analytics
					);
					setData(mergedAds);
				} else {
					console.error(
						"Failed to fetch data:",
						response.status,
						response.statusText
					);
				}
			} catch (error) {
				console.error("An error occurred while fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return { data };
};

export default useDataServices;
