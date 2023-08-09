import React from "react";
import { editIcon, close } from "../images/svgs";

const CartListComponent = ({ image, title, price, instractions }) => {
  return (
    <div className="w-full relative ">
      <button
        className="bg-red-500 rounded-[50%] p-[5px] border-[3px] hover:bg-red-400 absolute top-[-18px] right-[15px] z-10
      "
      >
        {close}
      </button>
      <button
        className="bg-green-500 rounded-[50%] p-[5px] border-[3px] hover:bg-green-400 absolute top-[-18px] right-[60px] z-10
      "
      >
        {editIcon}
      </button>
      <div className=" grid grid-cols-3 overflow-x-auto sm:rounded-lg shadow-lg bg-orange-200 border-lightmode-pBtn hover:bg-orange-200 dark:bg-darkmode-accent  dark:border-blue-900 dark:hover:bg-blue-900 w-full h-[200px] mb-10 p-5">
        <img
          className="tdImage self-center rounded-t-lg w-full"
          src={image}
          alt={title}
        />
        <div className="flex flex-col">
          <div className="text-2xl font-bold mb-auto">{title}</div>
          <div className="slef-mb-auto">{instractions}</div>
        </div>
        <div className=" self-center ml-auto">{price}</div>
      </div>
    </div>
  );
};

export default CartListComponent;
