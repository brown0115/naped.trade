import { useState } from "react";
import ActiveTrades from "./tabs/activeTrades";
import ClosedTrades from "./tabs/closedTrades";
import PublicTrades from "./tabs/publicTrades";
import Leaderboard from "./tabs/leaderboard";
import LeaderboardMenu from "../../selectMenu/LeaderboardMenu";
function TradingBoard() {
    const [BoardTab, setBoardTab] = useState('active_trades')
    const filterTab = (event) => {
        const targetTab = event.target.getAttribute('board-tab')
        setBoardTab(targetTab)
    }
    return (
        <div className="relative w-full px-[8px]  mt-[33px] mb-[14px]">
            <div className="w-full px-[25px] pb-[8px] pt-[15px] bg-blueDark rounded-[10px]">
                <ul className="flex items-center gap-[19px] w-[70%]">
                    <li onClick={filterTab} board-tab="active_trades" className={`${BoardTab === 'active_trades' ? 'text-pink text-shadow-pink' : 'text-white'} text-base font-bold hover:text-pink cursor-pointer`}>Active Trades</li>
                    <li onClick={filterTab} board-tab="closed_trades" className={`${BoardTab === 'closed_trades' ? 'text-pink text-shadow-pink' : 'text-white'} text-base font-bold hover:text-pink cursor-pointer`}>Closed Trades</li>
                    <li onClick={filterTab} board-tab="public_trades" className={`${BoardTab === 'public_trades' ? 'text-pink text-shadow-pink' : 'text-white'} text-base font-bold hover:text-pink cursor-pointer`}>Public Trades</li>
                    <li onClick={filterTab} board-tab="leaderboard" className={`${BoardTab === 'leaderboard' ? 'text-pink text-shadow-pink' : 'text-white'} text-base font-bold hover:text-pink cursor-pointer`}>Leaderboard</li>
                    <li className="ml-auto">
                        <LeaderboardMenu />
                    </li>
                </ul>
                <div className="w-full mt-[27px]">
                    {
                        BoardTab === 'active_trades'
                        ?
                        (<ActiveTrades />)
                        :
                        BoardTab === 'closed_trades'
                        ?
                        (<ClosedTrades />)
                        :
                        BoardTab === 'public_trades'
                        ?
                        (
                        <PublicTrades />
                        )
                        :
                        BoardTab === 'leaderboard'
                        ?
                        (
                        <Leaderboard />
                        )
                        :
                        (<></>)
                        
                    }
                    
                </div>
            </div>
        </div>
    )
}
export default TradingBoard;