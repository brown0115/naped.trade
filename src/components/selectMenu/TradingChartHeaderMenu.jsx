import React from "react";
import Select from "react-select";
import Coin from "../../assets/icons/dai.png";
import Coin2 from "../../assets/icons/tether.png";
import Coin3 from "../../assets/icons/usdc.png";

const options = [
  { value: "DAI", label: "DAI", image: Coin },
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
  IndicatorSeparator: () => null,
  DropdownIndicator: () => null,
  SingleValue: ({ children, data }) => (
    <div className="h-[20px] w-[20px] sm:w-[40px] sm:h-[40px] flex items-center justify-center rounded-[10px] bg-blueDark">
      <svg
        width="7"
        height="9"
        viewBox="0 0 7 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 9L0.468911 3.10782e-07L6.53109 9.07517e-07L3.5 9Z"
          fill="#D9D9D9"
        />
      </svg>
    </div>
  ),
  Option: ({ innerProps, label, data, isSelected }) => (
    <div
      className={`flex items-center border-b-2  gap-[4px] cursor-pointer pb-[6px] min-w-max ${
        isSelected ? "border-b-green" : "border-b-transparent"
      }`}
      {...innerProps}
    >
      <div className="flex items-center gap-[6px]">
        <img className="w-full max-w-[24px]" src={data.image} alt={label} />{" "}
        {label}
      </div>
    </div>
  ),
  Menu: ({ innerProps, children }) => (
    <div
      className="absolute left-[-50px] bg-blueDark py-[16px] px-[15px] rounded-[20px]"
      {...innerProps}
    >
      {children}
    </div>
  ),
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
    boxShadow: "none",
    outline: "none",
    border: "none",
    minHeight: "max-content",
    cursor: "pointer",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "blueDark" : "transparent",
    "&:hover": {
      backgroundColor: "black",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "blueDark",
    minWidth: "160px",
    padding: "10px",
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: "bold",
    color: "white",
    fontSize: "0.875rem",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    alignItems: "end",
    marginBottom: "10px",
  }),
  menuList: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "row",
    gap: "35px",
  }),
  input: (provided) => ({
    ...provided,
    position: "absolute",
  }),
};

const TradingChartHeaderMenu = () => {
  return (
    <Select
      options={options}
      defaultValue={options[0]}
      isSearchable={false}
      components={customComponents}
      classNamePrefix="react-select"
      styles={customStyles}
    />
  );
};

export default TradingChartHeaderMenu;
