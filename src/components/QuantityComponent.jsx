import React, { useState } from "react";

const QuantityComponent = ({ bg }) => {
  const [btnState, setBtnState] = useState(1);
  const handleMinClick = (event) => {
    if (btnState == 1) {
      return;
    } else {
      setBtnState(btnState - 1);
    }
  };
  const handlePlusClick = () => {
    setBtnState(btnState + 1);
  };
  return (
    <div
      className={`flex text-black dark:text-white justify-center items-center bg-lightmode-${bg}  dark:bg-darkmode-bg rounded-md h-9 mt-2 font-bold`}
    >
      <button
        onClick={handleMinClick}
        className="w-10 h-6 border-r-2 border-lightmode-pBtn"
      >
        -
      </button>
      <button className="w-10 h-6 text-center">{btnState}</button>
      <button
        onClick={handlePlusClick}
        className="w-10 h-6 border-l-2 border-lightmode-pBtn"
      >
        +
      </button>
    </div>
  );
};

export default QuantityComponent;
