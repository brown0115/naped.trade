import Bitcoin from "../../../../assets/imgs/coin3.svg";
import Downgrade from "../../../../assets/imgs/downgrade.svg";
import Upgrade from "../../../../assets/imgs/upgrade.svg";
function ActiveTrades() {
  return (
    <div className="w-full flex flex-col gap-[8px]">
      <div className="w-full grid grid-cols-9 place-items-center">
        <p className="text-sm text-white font-bold">Trader</p>
        <p className="text-sm text-white font-bold">Pair</p>
        <p className="text-sm text-white font-bold">Entry Price</p>
        <p className="text-sm text-white font-bold">Collateral</p>
        <p className="text-sm text-white font-bold">Liquidation Price</p>
        <p className="text-sm text-white font-bold">Leverage</p>
        <p className="text-sm text-white font-bold">Exit Price</p>
        <p className="text-sm text-white font-bold">ROI</p>
        <p className="text-sm text-white font-bold"></p>
      </div>

      <div className="flex flex-col gap-[10px]">
        <div className="w-full grid grid-cols-9 place-items-center bg-blueDark500 rounded-[10px] py-[11px]">
          <p className="text-sm font-bold text-white">0x...6969</p>
          <div className="flex items-center gap-[5px]">
            <img className="w-full max-w-[24px]" src={Bitcoin} alt="" />
            <img className="w-full max-w-[14px]" src={Downgrade} alt="" />
          </div>
          <p className="text-sm font-bold text-white">17,420.62</p>
          <p className="text-sm font-bold text-white">250.21</p>
          <p className="text-sm font-bold text-white">17,690.12</p>
          <p className="text-sm font-bold text-white">x220</p>
          <p className="text-sm font-bold text-white">-</p>
          <p className="text-sm font-bold text-white">-</p>
          <button className="px-[16px] py-[4px] bg-blue border border-white50 rounded-[5px]">
            <p className="text-xs font-bold text-white">Close Trade</p>
          </button>
        </div>
        <div className="w-full grid grid-cols-9 place-items-center bg-blueDark500 rounded-[10px] py-[11px]">
          <p className="text-sm font-bold text-white">0x...x420</p>
          <div className="flex items-center gap-[5px]">
            <img className="w-full max-w-[24px]" src={Bitcoin} alt="" />
            <img className="w-full max-w-[14px]" src={Upgrade} alt="" />
          </div>
          <p className="text-sm font-bold text-white">17,420.62</p>
          <p className="text-sm font-bold text-white">250.21</p>
          <p className="text-sm font-bold text-white">17,690.12</p>
          <p className="text-sm font-bold text-white">x220</p>
          <p className="text-sm font-bold text-white">-</p>
          <p className="text-sm font-bold text-white">-</p>
          <button className="px-[16px] py-[4px] bg-blue border border-white50 rounded-[5px]">
            <p className="text-xs font-bold text-white">Close Trade</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ActiveTrades;
