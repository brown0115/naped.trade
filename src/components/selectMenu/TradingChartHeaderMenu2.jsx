import React from "react";
import Select from "react-select";

const options = [
  { value: "5 min", label: "5 min" },
  { value: "10 min", label: "10 min" },
  { value: "15 min", label: "15 min" },
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
  DropdownIndicator: () => false,
  SingleValue: ({ children, data }) => (
    <div className="w-fit px-[5px] py-[8px] gap-[6px] flex items-center justify-center rounded-[10px] bg-blueDark">
      <p className="text-sm">{data.value}</p>
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.5 7L0.468911 0.25L6.53109 0.250001L3.5 7Z" fill="#D9D9D9" />
      </svg>
    </div>
  ),
};

const customClassNames = {
  control: (state) =>
    "!bg-transparent  !shadow-none !outline-none !border-none !min-h-max !cursor-pointer",
  option: (state) => "!bg-blueDark hover:!bg-black !text-white",
  menu: () => "!bg-blueDark !min-w-[120px]",
  singleValue: (state) => "!font-bold !text-white !text-sm",
  indicatorsContainer: () => "!items-end !mb-[10px]",
};

const TradingChartHeaderMenu2 = ({ onSelectedValueChange }) => {
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      isSearchable={false}
      components={customComponents}
      classNames={customClassNames}
    />
  );
};

export default TradingChartHeaderMenu2;
