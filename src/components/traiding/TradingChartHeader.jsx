import DownGrade from '../../assets/imgs/downgrade.svg'
import TradingChartHeaderMenu from '../selectMenu/TradingChartHeaderMenu';
import TradingChartHeaderMenu2 from '../selectMenu/TradingChartHeaderMenu2';

function TradingChartHeader() {
  return (
    <div className="w-full  flex flex-row items-center gap-[21px] py-[20px]">
      <div className="flex items-center gap-[4px]">
        <p className="font-bold text-sm sm:text-xl text-white">BTC</p>
        <div className="flex itms-center gap-[4px]">
          <img className="w-full max-w-[10px] sm:max-w-[19px]" src={DownGrade} alt="" />
          <p className="text-red text-sm sm:text-lg font-bold">19,468.52</p>
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
