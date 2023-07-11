import { useState } from "react";
import LimitMarketMenu from "../selectMenu/LimitMarketMenu";
import TraidingMain from "./TraidingMain";

function TradingSettings() {
  const [mode, setMode] = useState("basic");
  const [mode2, setMode2] = useState('long')
  const [limitMarket, setLimitMarket] = useState('Limit')
  const handleMode = (event) => {
    let isChecked = event.target.checked;
    isChecked ? setMode("advanced") : setMode("basic");
  };
  const handleMode2 = (event) => {
    let mode2Is = event.target.closest('.mode2btn').getAttribute('data-mode2')
    setMode2(mode2Is)
  }

  const handleSelectedValue = (selectedOption) => {
    setLimitMarket(selectedOption.value)
  };

  return (
    <div className="text-white bg-blueDark rounded-[10px] pt-[10px] pb-[21px] select-none">
      <div className="flex items-center gap-[82px] px-[13px]">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            checked={mode === "advanced" ? true : false}
            onChange={handleMode}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className="relative w-[164px] bg-black-500 rounded-[10px] px-[3px] gap-[4px] py-[2px] grid  grid-cols-[72px,87px] gap-[4px] before:content-[''] before:absolute before:w-[72px] peer-checked:before:left-[82px] peer-checked:before:w-[80px] peer-checked:before:right-0 before:h-[calc(100%-5px)] before:bg-blue before:rounded-[10px] before:top-[50%] before:translate-y-[-50%] before:left-[3px] transition-all before:transition-all">
            <p className="z-[9] font-normal text-white text-sm text-center w-full">
              Basic
            </p>
            <p className="z-[9] font-normal text-white text-sm text-center w-full">
              Advanced
            </p>
          </div>
        </label>
        <LimitMarketMenu onSelectedValueChange={handleSelectedValue} />
      </div>

      <div className="w-full px-[28px]">
        <div className="w-full grid grid-cols-2 gap-[15px] mt-[10px] mb-[38px]">
          <button onClick={handleMode2} data-mode2="long" className={`${mode2 === 'long' ? 'bg-blue' : ''} mode2btn transition-all p-[9px] sm:p-[13px] bg-black-500 text-white text-md sm:text-lg font-bold rounded-[10px]`}>
            Long
          </button>
           <button onClick={handleMode2} data-mode2="short" className={`${mode2 === 'short' ? 'bg-blue' : ''} mode2btn transition-all p-[9px] sm:p-[13px] bg-black-500 text-white text-md sm:text-lg font-bold rounded-[10px]`}>
            Short
          </button>
        </div>

        <TraidingMain mode={mode} mode2={mode2} limitMarket={limitMarket}/>

      </div>
    </div>
  );
}
export default TradingSettings;
