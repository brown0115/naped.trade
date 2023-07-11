import Bitcoin from "../../../assets/imgs/coin3.svg";
import Upgrade from "../../../assets/imgs/upgrade.svg";
function TradesDetail({closeTradeDetails}) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black40 z-[99]">
            <div className="w-full h-full flex items-center justify-center sm:py-[50px]">
                <div className="h-full flex flex-col w-full sm:max-w-[520px] bg-blueDark">
                    <div className="relative w-full overflow-auto h-full">
                        <div className="w-full h-full px-[59px] py-[30px] flex flex-col">
                            <div className="w-full h-full grid grid-cols-2">
                                <div className="pb-[45px] w-full h-full flex flex-col gap-[30px]">
                                    <p className="font-bold text-sm sm:text-md text-white">Trader</p>
                                    <p className="font-bold text-sm sm:text-md text-white">Pair</p>
                                    <p className="font-bold text-sm sm:text-md text-white">Entry Price</p>
                                    <p className="font-bold text-sm sm:text-md text-white">Collateral</p>
                                    <p className="font-bold text-sm sm:text-md text-white">Liquidation Price</p>
                                    <p className="font-bold text-sm sm:text-md text-white">Leverage</p>
                                    <p className="font-bold text-sm sm:text-md text-white">Exit Price</p>
                                    <p className="font-bold text-sm sm:text-md text-white">ROI</p>
                                    <p className="font-bold text-sm sm:text-md text-white">PNL</p>
                                </div>
                                <div className="pb-[45px] border-l-2 border-l-blueDark-900 w-full h-full flex flex-col gap-[30px] pl-[10px]">
                                    <p className="font-bold text-sm sm:text-md text-white">0x...x420</p>
                                    <div className="flex items-center gap-[5px]">
                                        <img className="w-full max-w-[24px]" src={Bitcoin} alt="" />
                                        <img className="w-full max-w-[14px]" src={Upgrade} alt="" />
                                    </div>
                                    <p className="font-bold text-sm sm:text-md text-white">6.54</p>
                                    <p className="font-bold text-sm sm:text-md text-white">1,230.00</p>
                                    <p className="font-bold text-sm sm:text-md text-white">6.32</p>
                                    <p className="font-bold text-sm sm:text-md text-white">x25</p>
                                    <p className="font-bold text-sm sm:text-md text-white">6.83</p>
                                    <p className="font-bold text-sm sm:text-md text-green">42.14%</p>
                                    <p className="font-bold text-sm sm:text-md text-white">480.00</p>

                                </div>

                            </div>
                        </div>
                    </div>
                    <button onClick={closeTradeDetails} className="w-full bg-blue text-white font-bold text-lg py-[13px]">close</button>
                </div>

            </div>
        </div>
    )
}
export default TradesDetail