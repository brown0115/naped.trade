import {
	makeApiRequest,
	generateSymbol,
	parseFullSymbol,
} from './helpers.js';
import {
	subscribeOnStream,
	unsubscribeFromStream,
} from './streaming.js';

import { CRYPTOS, FOREX, STOCKS, Intervals } from './constants.js';

const lastBarsCache = new Map();

let allSymbols = [];

// DatafeedConfiguration implementation

const configurationData = {
	// Represents the resolutions for bars supported by your datafeed
	supported_resolutions: Intervals,
	
	// The `exchanges` arguments are used for the `searchSymbols` method if a user selects the exchange
	exchanges: [
    {
      value: 'crypto',
      name: 'Crypto',
      desc: 'crypto'
    },
    {
      value: 'forex',
      name: 'Forex',
      desc: 'forex'
    },
    {
      value: 'stocks',
      name: 'Stocks',
      desc: 'stocks'
    }
  ],
	// The `symbols_types` arguments are used for the `searchSymbols` method if a user selects this symbol type
	symbols_types: [{
		name: 'crypto',
		value: 'crypto',
	},
	{ name: 'forex', value: 'forex' },
    { name: 'stocks', value: 'stocks' }
	],
};

// Obtains all symbols for all exchanges supported by CryptoCompare API
async function getAllSymbols() {
	// const data = await makeApiRequest('data/v3/all/exchanges');
	const data = {
    crypto: CRYPTOS,
    forex: FOREX,
    stocks: STOCKS
  };

	let allSymbol = [];

	configurationData.exchanges.forEach((exchange) => {
    const subData = data[exchange.value];
    if (subData)
      subData.forEach((item) => {
        allSymbol.push({
          symbol: item.label,
          full_name: `${exchange.name}:${item.label}`,
          description: item.label,
          exchange: exchange.value,
          type: exchange.value
        });
      });
  });
  return allSymbol;
}

export default {
	onReady: (callback) => {
		console.log('[onReady]: Method call');
		setTimeout(() => callback(configurationData));
	},

	searchSymbols: async (
		userInput,
		exchange,
		symbolType,
		onResultReadyCallback,
	) => {
		console.log('[searchSymbols]: Method call');
		const symbols = await getAllSymbols();
		const newSymbols = symbols.filter(symbol => {
			const isExchangeValid = symbolType === '' || symbol.type === symbolType;
			const isFullSymbolContainsInput = symbol.full_name
				.toLowerCase()
				.indexOf(userInput.toLowerCase()) !== -1;
			return isExchangeValid && isFullSymbolContainsInput;
		});
		onResultReadyCallback(newSymbols);
	},

	resolveSymbol: async (
		symbolName,
		onSymbolResolvedCallback,
		onResolveErrorCallback,
		extension
	) => {
		console.log('[resolveSymbol]: Method call', symbolName);
		const symbols = await getAllSymbols();
		const symbolItem = symbols.find(({
			full_name,
		}) => full_name === symbolName);
		if (!symbolItem) {
			console.log('[resolveSymbol]: Cannot resolve symbol', symbolName);
			onResolveErrorCallback('cannot resolve symbol');
			return;
		}
		// Symbol information object
		const symbolInfo = {
			ticker: symbolItem.full_name,
			name: symbolItem.symbol,
			description: symbolItem.description,
			type: symbolItem.type,
			session: '24x7',
			timezone: 'Etc/UTC',
			exchange: symbolItem.exchange,
			minmov: 1,
			pricescale: 100,
			has_intraday: false,
			has_no_volume: true,
			has_weekly_and_monthly: false,
			supported_resolutions: configurationData.supported_resolutions,
			volume_precision: 2,
			data_status: 'streaming',
		};

		console.log('[resolveSymbol]: Symbol resolved', symbolName);
		onSymbolResolvedCallback(symbolInfo);
	},

	getBars: async (symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) => {
		const { from, to, firstDataRequest } = periodParams;
		console.log('[getBars]: Method call', symbolInfo, resolution, from, to);
		const parsedSymbol = parseFullSymbol(symbolInfo.full_name);
		const urlParameters = {
			e: parsedSymbol.exchange,
			fsym: parsedSymbol.fromSymbol,
			tsym: parsedSymbol.toSymbol,
			toTs: to,
			limit: 2000,
		};
		const query = Object.keys(urlParameters)
			.map(name => `${name}=${encodeURIComponent(urlParameters[name])}`)
			.join('&');
		try {
			const data = await makeApiRequest(`data/histoday?${query}`);
			if (data.Response && data.Response === 'Error' || data.Data.length === 0) {
				// "noData" should be set if there is no data in the requested period
				onHistoryCallback([], {
					noData: true,
				});
				return;
			}
			let bars = [];
			data.Data.forEach(bar => {
				if (bar.time >= from && bar.time < to) {
					bars = [...bars, {
						time: bar.time * 1000,
						low: bar.low,
						high: bar.high,
						open: bar.open,
						close: bar.close,
					}];
				}
			});
			if (firstDataRequest) {
				lastBarsCache.set(symbolInfo.full_name, {
					...bars[bars.length - 1],
				});
			}
			console.log(`[getBars]: returned ${bars.length} bar(s)`);
			onHistoryCallback(bars, {
				noData: false,
			});
		} catch (error) {
			console.log('[getBars]: Get error', error);
			onErrorCallback(error);
		}
	},

	subscribeBars: (
		symbolInfo,
		resolution,
		onRealtimeCallback,
		subscriberUID,
		onResetCacheNeededCallback,
	) => {
		console.log('[subscribeBars]: Method call with subscriberUID:', subscriberUID);
		subscribeOnStream(
			symbolInfo,
			resolution,
			onRealtimeCallback,
			subscriberUID,
			onResetCacheNeededCallback,
			lastBarsCache.get(symbolInfo.full_name),
		);
	},

	unsubscribeBars: (subscriberUID) => {
		console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
		unsubscribeFromStream(subscriberUID);
	},
};
