import { useState } from "react";
import ActiveTrades from "./tabs/activeTrades";
import ClosedTrades from "./tabs/closedTrades";
import PublicTrades from "./tabs/publicTrades";
import Leaderboard from "./tabs/leaderboard";
import LeaderboardMenu from "../../selectMenu/LeaderboardMenu";
import TradesDetail from "../../modals/trades/details";
function TradingBoard() {
  const [tradesDetailModal, setTradesDetailModal] = useState(false);
  const [BoardTab, setBoardTab] = useState("active_trades");
  const [leaderBoardOnly, setLeaderBoardOnly] = useState("")
  const filterTab = (event) => {
    const targetTab = event.target.getAttribute("board-tab");
    setLeaderBoardOnly(targetTab)

    setBoardTab(targetTab);
  };
  const leaderBoardTabOnly = (event) => {
    const targetTab = event.target.getAttribute("board-tab");
    setBoardTab(targetTab);
    setLeaderBoardOnly(targetTab)
  }

  const openTradeDetails = () => {
    setTradesDetailModal(true);
  };
  const closeTradeDetails = () => {
    setTradesDetailModal(false);
  };
  const backToTrades = ()=> {
    setBoardTab("active_trades")
    setLeaderBoardOnly("")
  }


  return (
    <div className="relative w-full px-[8px]  mt-[33px] mb-[14px]">
      <div className="w-full px-[25px] pb-[8px] pt-[15px] bg-blueDark rounded-[10px]">
        <ul className={`${leaderBoardOnly === 'leaderboard' ? 'hidden' : ''} flex lg:flex items-center gap-[0px] lg:gap-[19px] justify-between lg:justify-start lg:w-[70%]`}>
          <li
            onClick={filterTab}
            board-tab="active_trades"
            className={`${
              BoardTab === "active_trades"
                ? "text-pink text-shadow-pink"
                : "text-white"
            } text-xs sm:text-sm lg:text-base font-bold hover:text-pink cursor-pointer`}
          >
            Active Trades
          </li>
          <li
            onClick={filterTab}
            board-tab="closed_trades"
            className={`${
              BoardTab === "closed_trades"
                ? "text-pink text-shadow-pink"
                : "text-white"
            } text-xs sm:text-sm lg:text-base font-bold hover:text-pink cursor-pointer`}
          >
            Closed Trades
          </li>
          <li
            onClick={filterTab}
            board-tab="public_trades"
            className={`${
              BoardTab === "public_trades"
                ? "text-pink text-shadow-pink"
                : "text-white"
            } text-xs sm:text-sm lg:text-base font-bold hover:text-pink cursor-pointer`}
          >
            Public Trades
          </li>
          <li
            onClick={filterTab}
            board-tab="leaderboard"
            className={`${
              BoardTab === "leaderboard"
                ? "text-pink text-shadow-pink"
                : "text-white"
            } hidden lg:block text-base font-bold hover:text-pink cursor-pointer`}
          >
            Leaderboard
          </li>
          {BoardTab === "leaderboard" ? (
            <li className="ml-auto hidden lg:block">
              <LeaderboardMenu/>
            </li>
          ) : (
            <></>
          )}
        </ul>
        <div className="w-full mt-[27px]">
          <div className="w-full pb-[15px] overflow-auto custom-scrollbar horizontal">
            {BoardTab === "active_trades" ? (
              <ActiveTrades />
            ) : BoardTab === "closed_trades" ? (
              <ClosedTrades openTradeDetails={openTradeDetails} />
            ) : BoardTab === "public_trades" ? (
              <PublicTrades openTradeDetails={openTradeDetails} />
            ) : BoardTab === "leaderboard" ? (
              <Leaderboard backToTrades={backToTrades}/>
            ) : (
              <></>
            )}
          </div>
        </div>
        {BoardTab !== 'leaderboard' ? (<button
          onClick={leaderBoardTabOnly}
          board-tab="leaderboard"
          className="lg:hidden opacity-80 hover:opacity-100 items-center gap-[4px] text-base font-bold cursor-pointer text-white mt-[10px] flex justify-end w-full"
        >
          Leaderboard
          <svg
            width="12"
            height="18"
            viewBox="0 0 12 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect className="fill-white"
              width="3.19604"
              height="13.103"
              transform="matrix(-0.734704 -0.678388 0.734704 -0.678388 2.34814 17.8713)"
              fill="#4F4A6F"
            />
            <rect className="fill-white"
              width="3.19604"
              height="13.137"
              transform="matrix(-0.734704 0.678388 -0.734704 -0.678388 12 8.91211)"
              fill="#4F4A6F"
            />
          </svg>
        </button>): <></>}
      </div>

      {tradesDetailModal ? (
        <TradesDetail closeTradeDetails={closeTradeDetails} />
      ) : (
        <></>
      )}
    </div>
  );
}
export default TradingBoard;
