import Bitcoin from "../../../../assets/imgs/coin3.svg";
import Downgrade from "../../../../assets/imgs/downgrade.svg";
import Upgrade from "../../../../assets/imgs/upgrade.svg";
function Leaderboard() {
  return (
    <div className="w-full flex flex-col gap-[8px]">
      <div className="w-full grid grid-cols-5 max-w-[70%] place-items-start">
        <p className="text-sm text-white font-bold w-full text-center">#</p>
        <p className="text-sm text-white font-bold">Trader</p>
        <p className="text-sm text-white font-bold">Trades</p>
        <p className="text-sm text-white font-bold">Win Rate</p>
        <p className="text-sm text-white font-bold">PNL</p>
      </div>
      <div className="w-full grid grid-cols-[70%,auto] gap-[50px]">
        <div className="flex flex-col gap-[10px]">
          <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
            <p className="text-sm font-bold text-white text-center w-full">1</p>
            <p className="text-sm font-bold text-white">0x...6969</p>
            <p className="text-sm font-bold text-white">3</p>
            <p className="text-sm font-bold text-green">51.11$</p>
            <p className="text-sm font-bold text-white">27,690.12</p>
          </div>
          <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
            <p className="text-sm font-bold text-white text-center w-full">1</p>
            <p className="text-sm font-bold text-white">0x...6969</p>
            <p className="text-sm font-bold text-white">3</p>
            <p className="text-sm font-bold text-green">51.11$</p>
            <p className="text-sm font-bold text-white">27,690.12</p>
          </div>
          <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
            <p className="text-sm font-bold text-white text-center w-full">1</p>
            <p className="text-sm font-bold text-white">0x...6969</p>
            <p className="text-sm font-bold text-white">3</p>
            <p className="text-sm font-bold text-green">51.11$</p>
            <p className="text-sm font-bold text-white">27,690.12</p>
          </div>
          <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
            <p className="text-sm font-bold text-white text-center w-full">1</p>
            <p className="text-sm font-bold text-white">0x...6969</p>
            <p className="text-sm font-bold text-white">3</p>
            <p className="text-sm font-bold text-green">51.11$</p>
            <p className="text-sm font-bold text-white">27,690.12</p>
          </div>
          <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
            <p className="text-sm font-bold text-white text-center w-full">1</p>
            <p className="text-sm font-bold text-white">0x...6969</p>
            <p className="text-sm font-bold text-white">3</p>
            <p className="text-sm font-bold text-green">51.11$</p>
            <p className="text-sm font-bold text-white">27,690.12</p>
          </div>
          <div className="w-full grid grid-cols-5 place-items-start bg-blueDark500 rounded-[10px] py-[11px]">
            <p className="text-sm font-bold text-white text-center w-full">1</p>
            <p className="text-sm font-bold text-white">0x...6969</p>
            <p className="text-sm font-bold text-white">3</p>
            <p className="text-sm font-bold text-green">51.11$</p>
            <p className="text-sm font-bold text-white">27,690.12</p>
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
