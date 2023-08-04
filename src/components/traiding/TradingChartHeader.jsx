import { useState, useEffect } from 'react';
import DownGrade from '../../assets/imgs/downgrade.svg'
import TradingChartHeaderMenu from '../selectMenu/TradingChartHeaderMenu';
import TradingChartHeaderMenu2 from '../selectMenu/TradingChartHeaderMenu2';

import { fCurrency } from '../../utils/formatNumber';



const TradingChartHeader = ({ currency, socket }) => {
  const [ tradePrice, setTradePrice ] = useState(0);

  useEffect(() => {
    socket.on('connect', () => {
    });

    socket.on('disconnect', (reason) => {
    });

    socket.on('error', (error) => {
    });

    socket.on(`crypto_trade_data`, (data) => {
      const exchange = 'crypto';
      const fromSymbol = data.pair.split('-')[0];
      const toSymbol = data.pair.split('-')[1];
      const tradePrice = parseFloat(data.p);
      const tradeTime = parseInt(data.t, 10);
      // const channelString = `0~${exchange}~${fromSymbol}~${toSymbol}`;
      // const subscriptionItem = channelToSubscription.get(channelString);
      if (fromSymbol === currency.toUpperCase() && toSymbol === 'USD') {
        setTradePrice(tradePrice);
      }
    })

    return () => {
      socket.off('crypto_trade_data');
      socket.off('connect');
      socket.off('disconnect');
      socket.off('error');
    };
  }, [ currency ])

  return (
    <div className="w-full  flex flex-row items-center gap-[21px] py-[20px]">
      <div className="flex items-center gap-[4px]">
        <p className="font-bold text-sm sm:text-xl text-white">{ currency.toUpperCase() }</p>
        <div className="flex itms-center gap-[4px]">
          <img className="w-full max-w-[10px] sm:max-w-[19px]" src={DownGrade} alt="" />
          <p className="text-red text-sm sm:text-lg font-bold w-[100px]">{ (tradePrice) }</p>
        </div>
        <TradingChartHeaderMenu />
      </div>
      <div className="flex items-center gap-[20px]">
        <div className='min-w-max flex flex-col items-center lg:flex-row gap-[4px]'>
            <p className='text-xs sm:text-sm text-gray font-bold'>24h Volume: </p>
            <p className='text-xs sm:text-sm text-white font-bold'>243M</p>
        </div>
        <div className='min-w-max flex flex-col items-center lg:flex-row gap-[4px]'>
            <p className='text-xs sm:text-sm text-gray font-bold'>H: </p>
            <p className='text-xs sm:text-sm text-green font-bold'>19,695.19</p>
        </div>
        <div className='min-w-max flex flex-col items-center lg:flex-row gap-[4px]'>
            <p className='text-xs sm:text-sm text-gray font-bold'>L: </p>
            <p className='text-xs sm:text-sm text-red font-bold'>19,695.19</p>
        </div>
      </div>
      <div className='block lg:hidden'>
      <TradingChartHeaderMenu2 />
      </div>
    </div>
  );
}
export default TradingChartHeader;
