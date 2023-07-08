import Header from "../components/layouts/Header"
import Trading from "../components/traiding/Traiding"
import TradingBoard from "../components/traiding/board/TradingBoard"
import Footer from '../components/layouts/Footer'

function AdvancedView() {
    return (
        <>
            <Header />
            <Trading />
            <TradingBoard />
            <Footer />
        </>
    )
}
export default AdvancedView