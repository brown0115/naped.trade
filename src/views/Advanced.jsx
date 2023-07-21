import Header from "../components/layouts/Header"
import Trading from "../components/traiding/Traiding"
import TradingBoard from "../components/traiding/board/TradingBoard"
import Footer from '../components/layouts/Footer'
import { useState } from "react"

function AdvancedView() {
    const [modeIs, setMode] = useState('basic')
    const [stopLossMode, setStopLossMode] = useState('usd')
    const [takeProfitMode, setTakeProfitMode] = useState('percentage')
     const handleStopLossMode = (data) => {
        setStopLossMode(data)
      }
      const handleLossProfitMode = (data) => {
        setTakeProfitMode(data)
      }
    return (
        <>
            <Header handleStopLossMode={handleStopLossMode} handleLossProfitMode={handleLossProfitMode} stopLossMode={stopLossMode} takeProfitMode={takeProfitMode}/>
            <Trading modeIs={modeIs} stopLossMode={stopLossMode} takeProfitMode={takeProfitMode}/>
            <TradingBoard />
            <Footer />
        </>
    )
}
export default AdvancedView