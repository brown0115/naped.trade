import React, { useEffect, useRef, useContext } from 'react';
import './index.css';
import { widget } from '../../charting_library';

import Datafeed from '../_external-pages/datafeed';

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export const TVChartContainer = ({ onSetCurrency }) => {
	const chartContainerRef = useRef();

	const defaultProps = {
		// symbol: 'AAPL',
		symbol: "Bitfinex:BTC/USD",
		interval: '1',
		datafeed: Datafeed,
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		theme: 'Dark',
		studiesOverrides: {},
	};

	useEffect(() => {
		const widgetOptions = {
			debug: false,
			symbol: defaultProps.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			// datafeed: new window.Datafeeds.UDFCompatibleDatafeed(defaultProps.datafeedUrl),
			datafeed: Datafeed,
			interval: defaultProps.interval,
			container: chartContainerRef.current,
			library_path: defaultProps.libraryPath,

			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings'],
			enabled_features: ['study_templates'],
			charts_storage_url: defaultProps.chartsStorageUrl,
			charts_storage_api_version: defaultProps.chartsStorageApiVersion,
			client_id: defaultProps.clientId,
			user_id: defaultProps.userId,
			fullscreen: defaultProps.fullscreen,
			autosize: defaultProps.autosize,
			studies_overrides: defaultProps.studiesOverrides,
			theme: 'Dark'
		};

		const tvWidget = new widget(widgetOptions);

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute('title', 'Click to show a notification popup');
				button.classList.add('apply-common-tooltip');
				button.addEventListener('click', () => tvWidget.showNoticeDialog({
					title: 'Notification',
					body: 'TradingView Charting Library API works correctly',
					callback: () => {
						console.log('Noticed!');
					},
				}));

				button.innerHTML = 'Check API';
			});

			tvWidget
				.activeChart()
				.onSymbolChanged()
				.subscribe(null, (data) => {
					let cur = data.name.split('/')[0].toLowerCase();
					onSetCurrency(cur);
				});
		});

		return () => {
			tvWidget.remove();
		};
	}, []);

	return (
		<div
			ref={chartContainerRef}
			className={'TVChartContainer'}
		/>
	);
}
