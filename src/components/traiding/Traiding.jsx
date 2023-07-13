import TradingSettings from "./TraidingSettings";
import { TVChartContainer } from '../TVChartContainer'
import { version } from '../../charting_library';

function Trading() {
    return (
        <>
            <div className="w-full text-white sm:px-[25px] sm:my-[52px] mb-[32px]">
                <div className="w-full grid grid-cols-1 lg:grid-cols-[auto,473px] gap-[50px]">
                    <div className="text-white border border-white22 w-full min-h-[500px]">
                        <TVChartContainer />
                    </div>
                    <div className="reative w-full">
                        <TradingSettings />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Trading;