import TradingSettings from "./TraidingSettings";
import { TVChartContainer } from "../TVChartContainer";
import { version } from "../../charting_library";
import TradingChartHeader from "./TradingChartHeader";
import { useEffect, useState } from "react";

function Trading({modeIs, stopLossMode, takeProfitMode}) {
  const [ currency, setCurrency ] = useState('btc');

  return (
    <>
      <div className="w-full text-white sm:px-[25px] sm:my-[52px] mb-[32px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[auto,520px] gap-[50px]">
          <div className="text-white w-full min-h-[500px]">
            <TradingChartHeader currency={currency} />
            <TVChartContainer onSetCurrency={ setCurrency }/>
          </div>
          <div className="reative w-full">
            <TradingSettings modeIs={modeIs} stopLossMode={stopLossMode} takeProfitMode={takeProfitMode} currency={currency}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Trading;
