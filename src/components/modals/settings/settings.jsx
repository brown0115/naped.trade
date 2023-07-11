import { useState } from "react";

function Settings() {
  const [panelSide, setPanelSide] = useState("left");
  const [lossMode, setLossMode] = useState("usd");
  const [profitMode, setProfitMode] = useState("usd");
  const switchPanelSide = (e) => {
    setPanelSide(e.target.id);
  };
  const handleLossMode = (e)=> {
    let isChecked = e.target.checked;
    isChecked ? setLossMode("percentage") : setLossMode("usd");
  };
  const handleProfitMode = (e)=> {
    let isChecked = e.target.checked;
    isChecked ? setProfitMode("percentage") : setProfitMode("usd");
  };
  return (
    <div className="settings-modal w-full sm:max-w-[496px] absolute sm:right-[25px] right-0 top-full text-white bg-blueDark border border-white75 py-[17px] sm:rounded-[10px] z-[99] select-none">
      <div className="w-full px-[34px] pb-[17px] border-b border-b-white75">
        <p className="font-bold text-white text-xl">Settings</p>
      </div>
      <div className="w-full px-[17px] py-[41px]">
        <div className="flex flex-col gap-[11px]">
          <div className="w-full flex item-center justify-between bg-black-500 px-[23px] py-[21px] rounded-[10px]">
            <p className="font-bold text-base text-white">Change Theme</p>
            <p className="flex items-center font-bold text-base text-grayDark2 mr-[75px]">
              Dark
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.51563 6.15063C8.43065 6.23543 8.36324 6.33617 8.31724 6.44706C8.27124 6.55795 8.24756 6.67683 8.24756 6.79688C8.24756 6.91693 8.27124 7.03581 8.31724 7.1467C8.36324 7.25759 8.43065 7.35833 8.51563 7.44313L12.0723 10.9998L8.51563 14.5565C8.43077 14.6413 8.36345 14.7421 8.31752 14.853C8.27159 14.9638 8.24795 15.0827 8.24795 15.2027C8.24795 15.3227 8.27159 15.4416 8.31752 15.5525C8.36345 15.6633 8.43077 15.7641 8.51563 15.849C8.6005 15.9338 8.70125 16.0012 8.81213 16.0471C8.92302 16.093 9.04186 16.1166 9.16188 16.1166C9.2819 16.1166 9.40075 16.093 9.51163 16.0471C9.62251 16.0012 9.72327 15.9338 9.80813 15.849L14.0156 11.6415C14.1006 11.5567 14.168 11.4559 14.214 11.345C14.26 11.2341 14.2837 11.1153 14.2837 10.9952C14.2837 10.8752 14.26 10.7563 14.214 10.6454C14.168 10.5345 14.1006 10.4338 14.0156 10.349L9.80813 6.14146C9.4598 5.79313 8.87313 5.79313 8.51563 6.15063Z"
                  fill="#BCBCBC"
                />
              </svg>
            </p>
          </div>
          <div className="w-full flex item-center justify-between bg-black-500 px-[23px] py-[21px] rounded-[10px]">
            <p className="font-bold text-base text-white">Gas Preference</p>
            <p className="flex items-center font-bold text-base text-grayDark2 mr-[75px]">
              Fast
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.51563 6.15063C8.43065 6.23543 8.36324 6.33617 8.31724 6.44706C8.27124 6.55795 8.24756 6.67683 8.24756 6.79688C8.24756 6.91693 8.27124 7.03581 8.31724 7.1467C8.36324 7.25759 8.43065 7.35833 8.51563 7.44313L12.0723 10.9998L8.51563 14.5565C8.43077 14.6413 8.36345 14.7421 8.31752 14.853C8.27159 14.9638 8.24795 15.0827 8.24795 15.2027C8.24795 15.3227 8.27159 15.4416 8.31752 15.5525C8.36345 15.6633 8.43077 15.7641 8.51563 15.849C8.6005 15.9338 8.70125 16.0012 8.81213 16.0471C8.92302 16.093 9.04186 16.1166 9.16188 16.1166C9.2819 16.1166 9.40075 16.093 9.51163 16.0471C9.62251 16.0012 9.72327 15.9338 9.80813 15.849L14.0156 11.6415C14.1006 11.5567 14.168 11.4559 14.214 11.345C14.26 11.2341 14.2837 11.1153 14.2837 10.9952C14.2837 10.8752 14.26 10.7563 14.214 10.6454C14.168 10.5345 14.1006 10.4338 14.0156 10.349L9.80813 6.14146C9.4598 5.79313 8.87313 5.79313 8.51563 6.15063Z"
                  fill="#BCBCBC"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[21x] mt-[23px]">
          <p className="font-bold px-[17px] text-white text-md">
            Trading Panel Side
          </p>
          <div className="flex items-center px-[30px] sm:px-[0px] sm:justify-center w-full gap-[8px] mt-[21px]">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                className="sr-only peer"
                checked={panelSide === "left" ? true : false}
                onChange={switchPanelSide}
                type="radio"
                name="panelSide"
                id="left"
              />
              <div className="p-[5px] peer-checked:bg-gradientMain bg-black-500 flex items-center gap-[17px] rounded-[5px]">
                <div className="w-[13px] h-[38px] bg-blue"></div>
                <p className="text-xs font-bold text-white mr-[21px]">Left</p>
              </div>
            </label>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="radio"
                checked={panelSide === "right" ? true : false}
                onChange={switchPanelSide}
                className="sr-only peer"
                name="panelSide"
                id="right"
              />
              <div className="p-[5px] bg-black-500 peer-checked:bg-gradientMain flex items-center gap-[17px] rounded-[5px]">
                <p className="text-xs font-bold text-white ml-[21px]">Right</p>
                <div className="w-[13px] h-[38px] bg-blue"></div>
              </div>
            </label>
          </div>
        </div>

        <div className="w-full flex flex-col gap-[21x] mt-[23px]">
          <p className="font-bold px-[17px] text-white text-md">
            Trading Panel Options
          </p>
          <div className="flex items-center flex-col  w-full gap-[25px] sm:gap-[17px] mt-[21px]">
            <div className="w-full flex sm:flex-row flex-col items-start gap-[6px] sm:gap-[0] sm:items-center justify-between pl-[30px] sm:pl-[40px]">
              <p className="font-normal text-white text-base">Stop Loss Mode</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input onChange={handleLossMode} checked={lossMode === 'percentage' ? true : false} type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-[164px] bg-black-500 rounded-[10px] px-[3px] gap-[4px] py-[2px] grid  grid-cols-[72px,87px] gap-[4px] before:content-[''] before:absolute before:w-[72px] peer-checked:before:left-[82px] peer-checked:before:w-[80px] peer-checked:before:right-0 before:h-[calc(100%-5px)] before:bg-blue before:rounded-[10px] before:top-[50%] before:translate-y-[-50%] before:left-[3px] transition-all before:transition-all">
                  <p className="z-[9] font-normal text-white text-sm text-center w-full">
                    USD
                  </p>
                  <p className="z-[9] font-normal text-white text-sm text-center w-full">
                    Percentage
                  </p>
                </div>
              </label>
            </div>
            <div className="w-full flex sm:flex-row flex-col items-start gap-[6px] sm:gap-[0] sm:items-center justify-between pl-[30px] sm:pl-[40px]">
              <p className="font-normal text-white text-base">Take Profit Mode</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input onChange={handleProfitMode} checked={profitMode === 'percentage' ? true : false} type="checkbox" value="" className="sr-only peer" />
                <div className="relative w-[164px] bg-black-500 rounded-[10px] px-[3px] gap-[4px] py-[2px] grid  grid-cols-[72px,87px] gap-[4px] before:content-[''] before:absolute before:w-[72px] peer-checked:before:left-[82px] peer-checked:before:w-[80px] peer-checked:before:right-0 before:h-[calc(100%-5px)] before:bg-blue before:rounded-[10px] before:top-[50%] before:translate-y-[-50%] before:left-[3px] transition-all before:transition-all">
                  <p className="z-[9] font-normal text-white text-sm text-center w-full">
                    USD
                  </p>
                  <p className="z-[9] font-normal text-white text-sm text-center w-full">
                    Percentage
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Settings;
