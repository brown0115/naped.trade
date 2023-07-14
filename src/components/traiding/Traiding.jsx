import TradingSettings from "./TraidingSettings";
import { TVChartContainer } from "../TVChartContainer";
import { version } from "../../charting_library";
import TradingChartHeader from "./TradingChartHeader";
function Trading() {
  return (
    <>
      <div className="w-full text-white sm:px-[25px] sm:my-[52px] mb-[32px]">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[auto,473px] gap-[50px]">
          <div className="text-white w-full min-h-[500px]">
            <TradingChartHeader />
            <TVChartContainer />
          </div>
          <div className="reative w-full">
            <TradingSettings />
          </div>
        </div>
      </div>
    </>
  );
}
export default Trading;
