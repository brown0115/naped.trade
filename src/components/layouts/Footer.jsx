import Logo2 from "../../assets/imgs/Logo2.svg";
import SeekLogo from "../../assets/imgs/seek.svg";
import DiscordLogo from "../../assets/imgs/discord.svg";
import TwitterLogo from "../../assets/imgs/twitter.svg";
function Footer() {
  return (
    <div className="w-full pt-[34px] pb-[41px] bg-white3 border-t border-white16 mt-[144px]">
      <div className="flex flex-col w-full justify-center items-center">
        <img className="w-full max-w-[127px]" src={Logo2} alt="" />
        <div className="flex items-center gap-[23px] mt-[10px] mb-[40px]  sm:mt-[28px] sm:mb-[73px]">
          <a href="#">
            <img src={SeekLogo} alt="" />
          </a>
          <a href="#">
            <img src={DiscordLogo} alt="" />
          </a>
          <a href="#">
            <img src={TwitterLogo} alt="" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-[15px] sm:gap-[60px]">
            <a href="#" className="text-white text-sm sm:text-md font-bold uppercase barlow">Terms of use</a>
            <a href="#" className="text-white text-sm sm:text-md font-bold uppercase barlow">Referral terms</a>
            <a href="#" className="text-white text-sm sm:text-md font-bold uppercase barlow">Docs</a>
            <a href="#" className="text-white text-sm sm:text-md font-bold uppercase barlow">Privacy policy</a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
