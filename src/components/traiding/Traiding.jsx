import TradingSettings from "./TraidingSettings";
import { TVChartContainer } from '../TVChartContainer'
import { version } from '../../charting_library';

function Trading() {
    return (
        <>
            <div className="w-full text-white px-[25px] my-[52px] mb-[32px]">
                <div className="w-full grid grid-cols-[auto,600px] gap-[50px]">
                    <div className="text-white border border-white22">
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