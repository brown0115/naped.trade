import CollateralMenu from "../selectMenu/CollateralMenu";
import { useState, useEffect, useContext } from "react";
import TraidingDetails from "./Details";
import { CryptoList } from "../../utils/CryptoList";
import { ContractContext } from '../../contexts/ContractContext';

function TraidingMain({
  mode,
  mode2,
  limitMarket,
  stopLossModeIs,
  takeProfitModeIs,
  currency
}) {
  // Decimal Input
  const [decimalInputValue, setDecimalInputValue] = useState("10.00");
  const handleDecimalInputChange = (e) => {
    setDecimalInputValue(e.target.value);
  };
  // Take Profit && stop Less
  const [takeProfit, setTakeProfit] = useState(false);
  const [stopLoss, setStopLoss] = useState(false);
  const [leverageVal, setLeverageVal] = useState(100);
  const [profit, setProfit] = useState(0);
  const [loss, setLoss] = useState(0);
  const { vault, user, dai } = useContext(ContractContext);

  let entryPrice = 1, sliderLoseValue = 1, sliderProfitValue = 1;

  useEffect(() => {
    const lsSign = mode2 === 'long' ? -1 : 1;
    const ls = Number(entryPrice) + lsSign * (entryPrice / leverageVal) * (sliderLoseValue / 100);
    setLoss(ls);
  }, [mode2, entryPrice, sliderLoseValue, leverageVal]);

  useEffect(() => {
    const pfSign = mode2 === 'long' ? 1 : -1;
    const pf = Number(entryPrice) + pfSign * (entryPrice / leverageVal) * (sliderProfitValue / 100);
    setProfit(pf);
  }, [mode2, entryPrice, sliderProfitValue, leverageVal]);

  const handleTakeProfit = () => {
    takeProfit ? setTakeProfit(false) : setTakeProfit(true);
  };
  const handleStopLoss = () => {
    stopLoss ? setStopLoss(false) : setStopLoss(true);
  };

  const handleTakeProfitRange = (event) => {
    const val = event.target.value;
  };
  const handleStopLossRange = (event) => {
    const val = event.target.value;
  };
  const handleLeverageMultiplierRange = (event) => {
    setLeverageVal(event.target.value * 2.5);
  };

  const getAssetID = (CryptoList) => {
    for (let i = 0; i < CryptoList.length; i++) {
      if (CryptoList[i].name == currency) {
        return CryptoList[i].currencyID;
      }
    }
  };

  const checkOrderType = (marketLimit, longShort) => {
    if (marketLimit == 'market' && longShort == 'long') {
      return 2;
    } else if (marketLimit == 'market' && longShort == 'short') {
      return 3;
    } else if (marketLimit == 'limit' && longShort == 'long') {
      return 0;
    } else {
      return 1;
    }
  };

  const checkTPnSLInput = (price) => {
    if (price == 0) {
      return price;
    } else {
      const round = Math.round(price);
      return round * 10 ** 8;
    }
  };

  const openMarketOrder = async (pair, orderType, leverageAmount, collateral, TP, SL) => {
    await dai.methods
      .approve(vault._address, collateral)
      .send({ from: user })
      .on('transactionHash', (hash) => {
        vault.methods
          .openMarketPriceOrder(pair, orderType, leverageAmount, collateral, TP, SL)
          .send({ from: user })
          .on('transactionHash', (hash) => {
            console.log(hash);
            setTimeout(() => {
              handleSelectTab(0);
            }, 7000);
            setIsShowAlert(true); // show notification
          });
      });
  };


  return (
    <div className="w-full">
      <div
        className={`grid ${
          mode === "advanced" ? "sm:grid-cols-2 gap-x-[15px] gap-y-[21px]" : ""
        }`}
      >
        <div className="w-full">
          <div className="flex flex-col gap-[16px]">
            <p className="font-bold text-white text-sm">COLLATERAL</p>
            <div className="min-h-[42px] w-full grid grid-cols-[50px,auto] gap-[6px] px-[8px] py-[5px] bg-black-500 rounded-[10px]">
              <CollateralMenu />
              <input
                type="number"
                step="0.01"
                value={decimalInputValue}
                onChange={handleDecimalInputChange}
                className="bg-transparent w-full h-full outline-none appereance-none"
              />
            </div>
          </div>
        </div>
        {mode === "advanced" ? (
          <>
            <div className="flex flex-col gap-[16px]">
              <p className="font-bold text-white text-sm">Entry Price</p>
              <div className="min-h-[42px] px-[8px] py-[5px] bg-black-500 rounded-[10px] flex items-center justify-center">
                $30,184.60000
              </div>
            </div>
            {takeProfitModeIs === "percentage" ? (
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-white text-sm">Take Profit </p>
                <div className="min-h-[42px] pl-[14px] pr-[6px] py-[5px] bg-black-500 rounded-[10px] flex items-center justify-between">
                  {takeProfit ? (
                    <>
                      $30,184.60000
                      <div className="flex items-center gap-[5px]">
                        <span className="text-green">770%</span>
                        <div
                          onClick={handleTakeProfit}
                          className="w-[31px] rounded-[10px] cursor-pointer h-[31px] bg-blueDark flex items-center justify-center"
                        >
                          <svg
                            className="rotate-180"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 7L0.401924 0.25L5.59808 0.250001L3 7Z"
                              fill="#D9D9D9"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="relative flex items-center justify-center w-full">
                      -
                      <div
                        onClick={handleTakeProfit}
                        className="absolute right-0 w-[31px] rounded-[10px] cursor-pointer h-[31px] bg-blueDark flex items-center justify-center"
                      >
                        <svg
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 7L0.401924 0.25L5.59808 0.250001L3 7Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                {takeProfit ? (
                  <div className="flex flex-col gap-[11px]">
                    <input
                      type="range"
                      onChange={handleTakeProfitRange}
                      min={0}
                      max={900}
                      className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gradientMain"
                    />
                    <div className="flex items-center justify-between gap-[15px] px-[20px]">
                      <p className="text-xs text-white font-normal">100</p>
                      <p className="text-xs text-white font-normal">250</p>
                      <p className="text-xs text-white font-normal">500</p>
                      <p className="text-xs text-white font-normal">750</p>
                      <p className="text-xs text-white font-normal">900</p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-white text-sm">Take Profit</p>
                <div className="w-full grid grid-cols-2 gap-[10px]">
                  <div className="text-sm min-h-[42px] pl-[14px] py-[5px] bg-black-500 rounded-[10px] flex items-center">
                    Price
                  </div>
                  <div className="text-sm min-h-[42px] pl-[14px] py-[5px] bg-black-500 rounded-[10px] flex items-center">
                    <span className="text-green mr-[4px]">+$</span>
                    Profit
                  </div>
                </div>
              </div>
            )}

            {stopLossModeIs === "percentage" ? (
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-white text-sm">Stop Loss </p>
                <div className="min-h-[42px] pl-[14px] pr-[6px] py-[5px] bg-black-500 rounded-[10px] flex items-center justify-between">
                  {stopLoss ? (
                    <>
                      $30,184.60000
                      <div className="flex items-center gap-[5px]">
                        <span className="text-red">770%</span>
                        <div
                          onClick={handleStopLoss}
                          className="w-[31px] rounded-[10px] cursor-pointer h-[31px] bg-blueDark flex items-center justify-center"
                        >
                          <svg
                            className="rotate-180"
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 7L0.401924 0.25L5.59808 0.250001L3 7Z"
                              fill="#D9D9D9"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="relative flex items-center justify-center w-full">
                      -
                      <div
                        onClick={handleStopLoss}
                        className="absolute right-0 w-[31px] rounded-[10px] cursor-pointer h-[31px] bg-blueDark flex items-center justify-center"
                      >
                        <svg
                          width="6"
                          height="7"
                          viewBox="0 0 6 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3 7L0.401924 0.25L5.59808 0.250001L3 7Z"
                            fill="#D9D9D9"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                {stopLoss ? (
                  <div className="flex flex-col gap-[11px]">
                    <input
                      type="range"
                      onChange={handleStopLossRange}
                      className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gradientMain"
                    />
                    <div className="flex items-center justify-between gap-[8px] px-[20px]">
                      <p className="text-xs text-white font-normal">10</p>
                      <p className="text-xs text-white font-normal">20</p>
                      <p className="text-xs text-white font-normal">30</p>
                      <p className="text-xs text-white font-normal">40</p>
                      <p className="text-xs text-white font-normal">50</p>
                      <p className="text-xs text-white font-normal">60</p>
                      <p className="text-xs text-white font-normal">80</p>
                      <p className="text-xs text-white font-normal">90</p>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-[16px]">
                <p className="font-bold text-white text-sm">Stop Loss</p>
                <div className="w-full grid grid-cols-2 gap-[10px]">
                  <div className="text-sm min-h-[42px] pl-[14px] py-[5px] bg-black-500 rounded-[10px] flex items-center">
                    Price
                  </div>
                  <div className="text-sm min-h-[42px] pl-[14px] py-[5px] bg-black-500 rounded-[10px] flex items-center">
                    <span className="text-red mr-[4px]">-$</span>
                    Loss
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-col gap-[16px] mt-[25px]">
        <p className="font-bold text-white text-sm">LEVERAGE MULTIPLIER </p>
        <div className="grid grid-cols-[151px,auto] gap-[23px]">
          <div className="min-h-[42px] pl-[14px] pr-[6px] py-[5px] bg-black-500 rounded-[10px] flex items-center justify-between">
            x
            <div className="flex w-full">
              <input
                className="w-full bg-transparent px-[10px]  outline-none border-none"
                type="number"
                value={leverageVal}
                onChange={(e) => setLeverageVal(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <p className="text-xs text-grayDark font-normal">
              Liquidation Price:
            </p>
            <p className="text-xs text-white font-normal">17,419.82</p>
          </div>
        </div>
        <div className="flex flex-col gap-[11px] px-[15px]">
          <input
            type="range"
            value={leverageVal / 2.5}
            onChange={handleLeverageMultiplierRange}
            className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-gradientMain"
          />
          <div className="flex items-center justify-between gap-[2px] sm:gap-[8px] sm:px-[20px] !px-0">
            <p className="text-xs text-white font-normal">1x</p>
            <p className="text-xs text-white font-normal">5x</p>
            <p className="text-xs hidden sm:block text-white font-normal">
              10x
            </p>
            <p className="text-xs text-white font-normal">25x</p>
            <p className="text-xs hidden sm:block text-white font-normal">
              50x
            </p>
            <p className="text-xs text-white font-normal">75x</p>
            <p className="text-xs hidden sm:block text-white font-normal">
              100x
            </p>
            <p className="text-xs text-white font-normal">125x</p>
            <p className="text-xs hidden sm:block text-white font-normal">
              175x
            </p>
            <p className="text-xs text-white font-normal">200x</p>
            <p className="text-xs text-white font-normal">225x</p>
            <p className="text-xs text-white font-normal">250x</p>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-[27px] mb-[44px]">
        <button className="w-full max-w-[234px] bg-blue text-white text-lg uppercase font-bold leading-[31px] rounded-[10px] py-[3px]"
        onClick={() => {
          openMarketOrder(
            getAssetID(CryptoList), // need to change according to pair selected
            checkOrderType(limitMarket, mode2), // 0 - Limit Long 1 - Limit Short - 2 - Market Long 3 - Market Short
            Math.round(leverageVal),
            BigInt(decimalInputValue * 10 ** 18),
            checkTPnSLInput(profit),
            checkTPnSLInput(loss)
          );
        }}>
          {limitMarket + " " + mode2}
        </button>
      </div>

      <TraidingDetails />
    </div>
  );
}
export default TraidingMain;
