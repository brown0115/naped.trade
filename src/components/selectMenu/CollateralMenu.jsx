import React from "react";
import Select from "react-select";
import Coin from "../../assets/icons/dai.png"
import Coin2 from "../../assets/icons/tether.png";
import Coin3 from "../../assets/icons/usdc.png";

const options = [
  { value: "DAI", label: "DAI", image: Coin},
  { value: "Tether", label: "Tether", image: Coin2 },
  { value: "USD", label: "USD Coin", image: Coin3 },
];

const DropdownIndicator = (props) => {
  return (
    <svg
      width="6"
      height="3"
      viewBox="0 0 6 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-0.5"
        x2="3.33379"
        y2="-0.5"
        transform="matrix(0.800061 0.599918 -0.800061 0.599918 0 1)"
        stroke="#BCBCBC"
      />
      <line
        y1="-0.5"
        x2="3.33379"
        y2="-0.5"
        transform="matrix(-0.800061 0.599918 0.800061 0.599918 5.33447 1)"
        stroke="#BCBCBC"
      />
    </svg>
  );
};

const customComponents = {
    IndicatorSeparator: () => false,
    DropdownIndicator: DropdownIndicator,
    SingleValue: ({ children, data }) => (
      <div>
        <img className="w-full max-w-[32px]" src={data.image} alt={children} />
      </div>
    ),
    Option: ({ innerProps, label, data }) => (
      <div className="flex items-center gap-[6px] cursor-pointer" {...innerProps}>
        <img className="w-full max-w-[32px]" src={data.image} alt={label} /> {label}
      </div>
    ),
  };

const customClassNames = {
  control: (state) =>
    "!bg-transparent !shadow-none !outline-none !border-none !min-h-max !cursor-pointer",
  option: (state) => "!bg-blueDark hover:!bg-black",
  menu: () => "!bg-blueDark !min-w-[160px] !p-[10px]",
  singleValue: (state) => "!font-bold !text-white !text-sm",
  indicatorsContainer: () => "!items-end !mb-[10px]",
  menuList: ()=> "!flex !flex-col !gap-[12px]",
  input: ()=> "!absolute",
};

const CollateralMenu = () => {
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      isSearchable={false}
      components={customComponents}
      classNamePrefix="react-select"
      classNames={customClassNames}
    />
  );
};

export default CollateralMenu;
