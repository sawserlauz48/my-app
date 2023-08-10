import React from "react";
import { editIcon, close } from "../images/svgs";

const CartListComponent = ({
  image,
  title,
  price,
  instractions,
  onClickEditBtn,
  onClickCloseBtn,
}) => {
  const handleCloseBtn = () => {
    onClickCloseBtn();
  };
  const handleEditBtn = () => {
    onClickEditBtn();
  };
  return (
    <div className="w-full relative ">
      <button
        onClick={handleCloseBtn}
        className="bg-red-500 rounded-[50%] p-[5px] border-[3px] hover:bg-red-400 absolute top-[-18px] right-[15px] z-10
      "
      >
        {close}
      </button>
      <button
        onClick={handleEditBtn}
        className="bg-green-500 rounded-[50%] p-[5px] border-[3px] hover:bg-green-400 absolute top-[-18px] right-[60px] z-10
      "
      >
        {editIcon}
      </button>
      <div className=" grid grid-cols-6 overflow-x-auto sm:rounded-lg shadow-lg bg-orange-200 border-lightmode-pBtn hover:bg-orange-20  dark:border-blue-900 dark:bg-blue-950 w-full h-[200px] mb-10 p-5">
        <div className="col-span-1">
          <img
            className="w-[160px] h-[160px] self-center rounded"
            src={image}
            alt={title}
          />
        </div>
        <div className="flex flex-col col-span-4">
          <div className="text-2xl font-bold mb-auto">{title}</div>
          <div className="slef-mb-auto">
            <div className="font-bold">special instractions:</div>
            <div>{instractions}</div>
          </div>
        </div>
        <div className=" col-span-1 self-center ml-auto">{price}</div>
      </div>
    </div>
  );
};

export default CartListComponent;
