import { NavLink } from "react-router-dom";
// Route Variables
import { HOME_PATH } from "../../router/routes";
// Images
import logo from "../../assets/imgs/Logo.svg";
import icon1 from "../../assets/imgs/icon1.svg"
// Icons
import WalletIcon from "../icons/WalletIcon";
import DotMenuIcon from "../icons/DotMenuIcon";
import Settings from "../modals/settings/settings";
import { useState } from "react";

import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected'

function Header({stopLossMode, takeProfitMode, handleStopLossMode, handleLossProfitMode}) {

  const { connect, isLoading } = useConnect({
    connector: new InjectedConnector()
  });
  const { address, connector, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const [settingModal, setSettingModal] = useState(false)
  const handleSettingModal = ()=> {
    settingModal ? setSettingModal(false) : setSettingModal(true)
  }

  const connectWallet = () => {
    !isConnected ? connect(): disconnect();
  }

  document.addEventListener('click', (e)=> {
    if(!e.target.closest('.settings-btn') && !e.target.closest('.settings-modal')) {
      setSettingModal(false)
    }
  })
  return (
    <header className="relative w-full pr-[15px] sm:pr-[25px] py-[26px] border-b border-b-white22">
      <div className="w-full flex items-center justify-between">
        <NavLink to={HOME_PATH} className="w-full max-w-[238px]">
          <img className="max-w-[117px] sm:max-w-full w-full" src={logo} alt="" />
        </NavLink>

        <div className="flex items-center gap-[10px] sm:gap-[33px]">
          <div className="p-[2.2px] bg-gradientMain rounded-[8px] cursor-pointer group">
            <button onClick={ connectWallet } className="flex items-center gap-[13px] py-[6px] pl-[14px] pr-[29px] bg-black rounded-[6px] group-hover:bg-transparent transition-all">
              <WalletIcon />
              <p className="font-normal text-base text-white">
                {isConnected && address}
                {isLoading ? 'Connecting' : 'Connect'}
              </p>
            </button>
          </div>
          <div onClick={handleSettingModal} className="settings-btn p-[2.2px] bg-gradientMain rounded-[8px] cursor-pointer group">
            <div className={`${settingModal ? 'bg-transparent' : ''} flex items-center  py-[6px] pl-[6px] pr-[12px] bg-black rounded-[6px] group-hover:bg-transparent transition-all`}>
              <img className="max-w-[19px] w-full" src={icon1} alt="" />
              <div className="w-[1px] h-[23px] bg-white ml-[6px] mr-[12px] opacity-50"></div>
              <DotMenuIcon />
            </div>
            
          </div>
          {settingModal ? (<Settings handleStopLossMode={handleStopLossMode} handleLossProfitMode={handleLossProfitMode} stopLossMode={stopLossMode} takeProfitMode={takeProfitMode} />) : <></>}

        </div>
      </div>
    </header>
  );
}
export default Header;
