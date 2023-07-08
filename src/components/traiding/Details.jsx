function TraidingDetails() {
  return (
    <div className="w-full flex flex-col gap-[43px]">
      <div className="w-full flex items-center justify-between">
        <p className="text-base text-white font-normal">Wallet Balance</p>
        <p className="text-base text-white font-normal">0 DAI</p>
      </div>
      <div className="flex flex-col gap-[23px]">
        <div className="w-full flex items-center justify-between">
          <p className="text-base text-white font-normal">Profits in</p>
          <p className="text-base text-white font-normal">DAI</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-base text-white font-normal">Entry Price</p>
          <p className="text-base text-white font-normal">19,368.52</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <p className="text-base text-white font-normal">Fees</p>
          <p className="text-base text-white font-normal">-</p>
        </div>
      </div>
    </div>
  );
}
export default TraidingDetails;
