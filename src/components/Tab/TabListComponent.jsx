import { useState } from "react";

const TabListComponent = ({ title, icon, name, onClick }) => {
  const handleRadioClick = (event) => {
    onClick(event);
  };
  return (
    <li>
      <input
        name={name}
        type="radio"
        id={title}
        className="add checked:text-lightmode-pBtn"
      />
      <label htmlFor={title} onClick={handleRadioClick}>
        <div className=" checked:text-lightmode-pBtn gap-x-2 inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-yellow-600 hover:border-yellow-600 dark:hover:text-yellow-600 hover:border-b-4 transition ease-in group">
          {icon}
          {title}
        </div>
      </label>
    </li>
  );
};

export default TabListComponent;
