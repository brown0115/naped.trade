import { NavLink } from "react-router-dom";
// Route Variables
import { HOME_PATH } from "../../router/routes";
// Images
import logo from "../../assets/imgs/Logo.svg";
import icon1 from "../../assets/imgs/icon1.svg"
// Icons
import WalletIcon from "../icons/WalletIcon";
import DotMenuIcon from "../icons/DotMenuIcon";

function Header() {
  return (
    <header className="relative w-full pr-[25px] py-[26px] border-b border-b-white22">
      <div className="w-full flex items-center justify-between">
        <NavLink to={HOME_PATH} className="w-full max-w-[238px]">
          <img src={logo} alt="" />
        </NavLink>

        <div className="flex items-center gap-[33px]">
          <div className="p-[2.2px] bg-gradientMain rounded-[8px] cursor-pointer group">
            <div className="flex items-center gap-[13px] py-[6px] pl-[14px] pr-[29px] bg-black rounded-[6px] group-hover:bg-transparent transition-all">
              <WalletIcon />
              <p className="font-normal text-base text-white">Conntect</p>
            </div>
          </div>
          <div className="p-[2.2px] bg-gradientMain rounded-[8px] cursor-pointer group">
            <div className="flex items-center  py-[6px] pl-[6px] pr-[12px] bg-black rounded-[6px] group-hover:bg-transparent transition-all">
              <img className="max-w-[19px] w-full" src={icon1} alt="" />
              <div className="w-[1px] h-[23px] bg-white ml-[6px] mr-[12px] opacity-50"></div>
              <DotMenuIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
