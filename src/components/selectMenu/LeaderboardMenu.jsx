import React from "react";
import Select from "react-select";

const options = [
  { value: "Day", label: "Day" },
  { value: "Week", label: "Week" },
  { value: "Month", label: "Month" },
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
};

const customClassNames = {
  control: (state) =>
    "!bg-transparent !shadow-none !outline-none !border-none !min-h-max !cursor-pointer",
  option: (state) => "!bg-blueDark hover:!bg-black !text-white",
  menu: () => "!bg-blueDark !min-w-[120px]",
  singleValue: (state) => "!font-bold !text-white !text-sm",
  indicatorsContainer: () => "!items-end !mb-[10px]",
};

const TradingBoard = ({ onSelectedValueChange }) => {

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

export default TradingBoard;
