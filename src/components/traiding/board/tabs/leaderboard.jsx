import Bitcoin from "../../../../assets/imgs/coin3.svg";
import Downgrade from "../../../../assets/imgs/downgrade.svg";
import Upgrade from "../../../../assets/imgs/upgrade.svg";
import LeaderboardMenu from "../../../selectMenu/LeaderboardMenu";

function Leaderboard({backToTrades}) {

  return (
    <div className="w-full flex flex-col gap-[8px]">
      <div className="relative lg:hidden flex items-center justify-center px-[10px]">
        <button
        onClick={backToTrades}
          board-tab="leaderboard"
          className="absolute left-0 top-[-5px] opacity-80 hover:opacity-100 flex items-center gap-[4px] text-xs sm:text-base font-bold cursor-pointer text-white mt-[10px]"
        >
          <svg
            className="rotate-180"
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="fill-white"
              width="3.19604"
              height="13.103"
              transform="matrix(-0.734704 -0.678388 0.734704 -0.678388 2.34814 17.8713)"
              fill="#4F4A6F"
            />
            <rect
              className="fill-white"
              width="3.19604"
              height="13.137"
              transform="matrix(-0.734704 0.678388 -0.734704 -0.678388 12 8.91211)"
              fill="#4F4A6F"
            />
          </svg>
          Trades
        </button>
        <p className="text-lg sm:text-xl font-bold text-pink text-shadow-pink">
          Leaderboard
        </p>
      </div>
      <div className="mx-auto my-[30px] lg:hidden w-max pr-[10px] h-[39px] bg-blueDark500 flex items-center justyf-center rounded-[10px]">
        <LeaderboardMenu />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-[70%,auto] gap-[50px]">
        <div className="fle w-full overflow-auto custom-scrollbar horizontal pb-[15px]">
          <div className="flex flex-col gap-[10px] min-w-[600px]">
            <div className="w-full grid grid-cols-5 lg:max-w-[70%] place-items-start">
              <p className="text-sm text-white font-bold w-full text-center">
                #
              </p>
              <p className="text-sm text-white font-bold">Trader</p>
              <p className="text-sm text-white font-bold">Trades</p>
              <p className="text-sm text-white font-bold">Win Rate</p>
              <p className="text-sm text-white font-bold">PNL</p>
            </div>
            <div className="flex flex-col gap-[10px]">
              <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
                <p className="text-sm font-bold text-white text-center w-full">
                  1
                </p>
                <p className="text-sm font-bold text-white">0x...6969</p>
                <p className="text-sm font-bold text-white">3</p>
                <p className="text-sm font-bold text-green">51.11$</p>
                <p className="text-sm font-bold text-white">27,690.12</p>
              </div>
              <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
                <p className="text-sm font-bold text-white text-center w-full">
                  1
                </p>
                <p className="text-sm font-bold text-white">0x...6969</p>
                <p className="text-sm font-bold text-white">3</p>
                <p className="text-sm font-bold text-green">51.11$</p>
                <p className="text-sm font-bold text-white">27,690.12</p>
              </div>
              <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
                <p className="text-sm font-bold text-white text-center w-full">
                  1
                </p>
                <p className="text-sm font-bold text-white">0x...6969</p>
                <p className="text-sm font-bold text-white">3</p>
                <p className="text-sm font-bold text-green">51.11$</p>
                <p className="text-sm font-bold text-white">27,690.12</p>
              </div>
              <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
                <p className="text-sm font-bold text-white text-center w-full">
                  1
                </p>
                <p className="text-sm font-bold text-white">0x...6969</p>
                <p className="text-sm font-bold text-white">3</p>
                <p className="text-sm font-bold text-green">51.11$</p>
                <p className="text-sm font-bold text-white">27,690.12</p>
              </div>
              <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
                <p className="text-sm font-bold text-white text-center w-full">
                  1
                </p>
                <p className="text-sm font-bold text-white">0x...6969</p>
                <p className="text-sm font-bold text-white">3</p>
                <p className="text-sm font-bold text-green">51.11$</p>
                <p className="text-sm font-bold text-white">27,690.12</p>
              </div>
              <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
                <p className="text-sm font-bold text-white text-center w-full">
                  1
                </p>
                <p className="text-sm font-bold text-white">0x...6969</p>
                <p className="text-sm font-bold text-white">3</p>
                <p className="text-sm font-bold text-green">51.11$</p>
                <p className="text-sm font-bold text-white">27,690.12</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center translate-y-[-30px]">
          <div className="w-full max-w-[224px] flex flex-col gap-[10px] w-full">
            <p className="text-sm text-white font-bold">Trader</p>
            <div className="p-[25px] bg-blueDark500 flex flex-col gap-[25px] rounded-[10px]">
              <div className="w-full grid grid-cols-2">
                <p className="text-sm text-white font-bold">#</p>
                <p className="text-sm text-white font-bold">32</p>
              </div>
              <div className="w-full grid grid-cols-2">
                <p className="text-sm text-white font-bold">Trader</p>
                <p className="text-sm text-white font-bold">0x...6969</p>
              </div>
              <div className="w-full grid grid-cols-2">
                <p className="text-sm text-white font-bold">Trades</p>
                <p className="text-sm text-white font-bold">13</p>
              </div>
              <div className="w-full grid grid-cols-2">
                <p className="text-sm text-white font-bold">Win Rate</p>
                <p className="text-sm text-green font-bold">36.6%</p>
              </div>
              <div className="w-full grid grid-cols-2">
                <p className="text-sm text-white font-bold">PNL</p>
                <p className="text-sm text-white font-bold">7,690.12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Leaderboard;
