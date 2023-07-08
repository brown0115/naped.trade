import React from "react";
import Select from "react-select";
import Coin from "../../assets/imgs/coin.svg";
import Coin2 from "../../assets/imgs/coin2.svg";

const options = [
  { value: "Limit", label: "Limit", image: Coin},
  { value: "Market", label: "Market", image: Coin2 },
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
      <div className="flex items-center gap-[6px]" {...innerProps}>
        <img className="w-full max-w-[32px]" src={data.image} alt={label} /> {label}
      </div>
    ),
  };

const customClassNames = {
  control: (state) =>
    "!bg-transparent !shadow-none !outline-none !border-none !min-h-max !cursor-pointer",
  option: (state) => "!bg-blueDark hover:!bg-black ",
  menu: () => "!bg-blueDark !min-w-[120px] !p-[10px]",
  singleValue: (state) => "!font-bold !text-white !text-sm",
  indicatorsContainer: () => "!items-end !mb-[10px]",
  menuList: ()=> "!flex !flex-col !gap-[12px]",
  input: ()=> "!absolute ajsdkjadj aklsjdk ajsd",
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
