import React, { useEffect, useState } from "react";

import { editIcon, close } from "../images/svgs";
import CheckboxComponent from "./CheckboxComponent";
import ButtonComponent from "./ButtonComponent";
import axios from "axios";
import { toast } from "react-toastify";

const CartListComponent = ({
  image,
  title,
  price,
  instractions,
  ingredients,
  onClickEditBtn,
  onClickCloseBtn,
  onClickSaveBtn,
  id,
  value,
}) => {
  const [inputTextState, setInputTextState] = useState("");
  const [isstate, setState] = useState(false);
  const [isIngredients, setIngredients] = useState([]);
  const [checkBoxState, setCheckBoxState] = useState("");
  useEffect(() => {
    const ingredientsArray = Object.entries(ingredients).map(
      ([key, value]) => ({ title: key, isChecked: value })
    );
    setInputTextState(instractions);
    setIngredients(ingredientsArray);
    setCheckBoxState(ingredients);
  }, []);
  const handleDeleteBtn = () => {
    onClickCloseBtn(id);
  };
  const handleEditBtn = () => {
    setState(!isstate);
  };
  const handleClick = (event) => {
    let newCheckBoxState = JSON.parse(JSON.stringify(checkBoxState));
    newCheckBoxState[event.target.id] = event.target.checked;
    setCheckBoxState(newCheckBoxState);
  };
  const handleInputChange = (event) => {
    let newInputState = JSON.parse(JSON.stringify(inputTextState));
    newInputState = event.target.value;
    setInputTextState(newInputState);
  };

  const handleSaveBtn = async () => {
    const unChekedIngredients = Object.keys(checkBoxState)
      .filter((key) => !checkBoxState[key])
      .map((key) => `without ${key} `);
    await axios.put("users/cartItem/" + id, {
      ingredients: checkBoxState,
      specialInstruction: unChekedIngredients + " " + inputTextState,
      title,
      image,
      price,
      _id: id,
    });
    await axios
      .get("users/cart/get-my-cart")
      .then(({ data }) => {})
      .catch((err) => {
        toast.error(err.response);
      });
    setState(!isstate);
    onClickSaveBtn();
  };
  const handleCancleBtn = () => {
    setState(!isstate);
  };
  return (
    <div className="w-full relative p-2 mt-10 ">
      <button
        onClick={handleDeleteBtn}
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
      <div className="flex flex-col">
        <div className=" min-h-[180px] flex overflow-x-auto rounded-lg shadow-lg bg-orange-200 border-lightmode-pBtn hover:bg-orange-20  dark:border-blue-900 dark:bg-blue-950 mb-1 ">
          <div className="">
            <img className=" self-center rounded" src={image} alt={title} />
          </div>
          <div className="flex flex-col p-5">
            <div className="sm:text-3xl font-bold mt-2 mb-2">{title}</div>
            <div className="font-bold text-slate-600">
              special instractions:
            </div>
            <div className="text-slate-600 flex p-1">
              {!isstate ? (instractions == "" ? "" : instractions) : ""}
              <div className="relative z-0 mt-1 w-full "></div>
            </div>
          </div>
          <div className="flex flex-col mr-3 text-lg font-bold col-span-1 self-center ml-auto">
            <div className="ml-10 self-start">{price} ₪</div>
          </div>
        </div>
        {/* edit panel */}
        {isstate ? (
          <div className=" relative top-[-5px] min-h-[180px] flex overflow-x-auto border-t-2 rounded-t-none rounded-lg shadow-lg bg-orange-200 border-lightmode-pBtn hover:bg-orange-20  dark:border-blue-900 dark:bg-blue-950 mb-1 flex-col ">
            <div className="flex flex-col p-5">
              <div className="text-slate-600 flex p-1">
                {!isstate ? (instractions == "" ? "" : instractions) : ""}
                <div className="relative z-0 mt-1 w-full ">
                  <textarea
                    className="block p-2.5 px-2  w-full  text-sm text-lightmode-text border-0 border-b-2 border-lightmode-pBtn appearance-none dark:text-darkmode-text dark:border-blue-900 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-lightmode-pBtn peer"
                    placeholder={" "}
                    name="text"
                    id="text"
                    value={inputTextState}
                    onChange={handleInputChange}
                  ></textarea>
                  <label
                    htmlFor={"text"}
                    className="flex absolute text-md text-lightmode-text dark:text-darkmode-text duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightmode-pBtn peer-focus:dark:text-darkmode-pBtn peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Enter instruction here
                  </label>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="grid grid-cols-2 mb-3">
                {isstate
                  ? isIngredients.map((item, index) => (
                      <CheckboxComponent
                        label={item.title}
                        state={checkBoxState}
                        type={"checkBox"}
                        key={title + Date.now() + index}
                        title={item.title}
                        onClick={handleClick}
                      />
                    ))
                  : ""}
              </div>
            </div>
            <div className=" text-lg font-bold">
              {isstate ? (
                <div className="flex justify-center gap-y-3 w-full">
                  <ButtonComponent
                    onClick={handleSaveBtn}
                    label={"SAVE"}
                    className={
                      " w-1/4 px-5 py-2.5 mr-2 mb-2  bottom-3 right-3 rounded"
                    }
                  />
                  <ButtonComponent
                    label={"CANCLE"}
                    onClick={handleCancleBtn}
                    className={
                      " w-1/4 px-5 py-2.5 mr-2 mb-2  bottom-3 right-24 rounded"
                    }
                  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartListComponent;
