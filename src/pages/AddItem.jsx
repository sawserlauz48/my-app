import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CheckboxComponent from "../components/CheckboxComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent";
import { close } from "../images/svgs";
import QuantityComponent from "../components/QuantityComponent";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/itmes";
import InputComponent from "../components/InputComponent";
import RadioComponent from "../components/RadioComponent";

const inputs = [
  { label: "Title *", name: "title", isReq: true },
  { label: "Description  *", name: "description", isReq: true },
  { label: "Price *", name: "price", isReq: true },
  { label: "Image url", name: "imgUrl", isReq: true },
  { label: "Image alt", name: "imgAlt", isReq: true },
];

const course = [
  { label: "Salad" },
  { label: "Starter" },
  { label: "Pastries" },
  { label: "Sandwiches" },
  { label: "Main" },
  { label: "Drinks" },
];
const Dietary = [{ label: "All" }, { label: "Vegetarian" }, { label: "Vegan" }];
const AddItem = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    imgUrl: "",
    imgAlt: "",
    price: "",
    ingredients: "",
    dietary: "",
    course: "",
  });

  const [inputFields, setInputFields] = useState([]);
  const [ing, setIng] = useState([]);

  const addInputField = () => {
    const newInputField = (
      <input
        placeholder="Add ingredients"
        className="mt-2"
        key={inputFields.length}
        type={"text"}
        id={inputFields.length}
        label={"Add ingredients here"}
        name={"ingredients"}
        onChange={handleInputIngChange}
      />
    );
    setInputFields([...inputFields, newInputField]);
  };

  const handleCourseBtnClick = (event) => {
    let newInputState = JSON.parse(JSON.stringify(state));
    newInputState["course"] = event.target.innerHTML;
    setState(newInputState);
  };
  const handleDietaryBtnClick = (event) => {
    let newInputState = JSON.parse(JSON.stringify(state));
    newInputState["Dietary"] = event.target.innerHTML;
    setState(newInputState);
  };
  const handleInputChange = (event) => {
    let newInputState = JSON.parse(JSON.stringify(state));
    newInputState[event.target.id] = event.target.value;
    setState(newInputState);
  };
  const handleInputIngChange = (event) => {
    const index = event.target.id;
    const value = event.target.value;

    setIng((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  console.log(ing);
  const handleBtnClick = () => {};

  const handleAddIngredients = () => {};
  return (
    <div
      // onClick={handleDivClick}
      className="bg-lightmode-accent border w-full dark:border-slate-700 p-[48px] container
        border-slate-50 dark:bg-darkmode-accent rounded-[4px] shadow-slate-600 shadow-md"
    >
      <div className="flex flex-col items-center sm:items-start space-x-7 space-y-4 sm:flex-row ">
        <div>
          <img
            src={
              "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg"
            }
            alt={"defult picture"}
            className="w-[280px]"
          />
        </div>
        <div className="space-y-4 flex flex-col w-full">
          {inputs.map((input) => (
            <div key={input.label}>
              <InputComponent
                label={input.label}
                name={input.name}
                required={input.isReq}
                type={input.type}
                inputState={state}
                onChange={handleInputChange}
              ></InputComponent>
            </div>
          ))}
        </div>
      </div>
      <div className=" relative inline-flex items-center justify-center w-full py-2 mt-10 ">
        <hr className=" w-3/4 h-[2px] bg-slate-300 border-0 dark:bg-slate-700 " />
        <div className=" absolute  flex items-center rounded-[25px] px-3 font-medium text-white -translate-x-1/2 bg-lightmode-pBtn left-1/2 dark:text-white  border-[10px] border-lightmode-accent dark:border-darkmode-accent">
          <span className=" relative bottom-[2px]">Ingredients</span>
        </div>
        <div>
          <button onClick={addInputField}>Add Input</button>
          {inputFields.map((input, index) => (
            <div key={index}>{input}</div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <ButtonComponent
          label={"Add ingredients here"}
          className={"px-5 py-2.5 mr-2 mb-2 rounded-md"}
          onClick={handleAddIngredients}
        ></ButtonComponent>
      </div>
      <div className=" relative inline-flex items-center justify-center w-full py-2 mt-10 ">
        <hr className=" w-3/4 h-[2px] bg-slate-300 border-0 dark:bg-slate-700 " />
        <div className=" absolute  flex items-center rounded-[25px] px-3 font-medium text-white -translate-x-1/2 bg-lightmode-pBtn left-1/2 dark:text-white  border-[10px] border-lightmode-accent dark:border-darkmode-accent">
          <span className=" relative bottom-[2px]">Dietary</span>
        </div>
      </div>

      <form className="flex flex-wrap justify-center mt-5">
        {Dietary.map((input) => (
          <div key={input.label}>
            <RadioComponent
              label={input.label}
              onClick={handleDietaryBtnClick}
            ></RadioComponent>
          </div>
        ))}
      </form>
      <div className=" relative inline-flex items-center justify-center w-full py-2 mt-10 ">
        <hr className=" w-3/4 h-[2px] bg-slate-300 border-0 dark:bg-slate-700 " />
        <div className=" absolute  flex items-center rounded-[25px] px-3 font-medium text-white -translate-x-1/2 bg-lightmode-pBtn left-1/2 dark:text-white  border-[10px] border-lightmode-accent dark:border-darkmode-accent">
          <span className=" relative bottom-[2px]">Course</span>
        </div>
      </div>
      <form className="flex flex-wrap justify-center mt-5">
        {course.map((input) => (
          <div key={input.label}>
            <RadioComponent
              label={input.label}
              onClick={handleCourseBtnClick}
            ></RadioComponent>
          </div>
        ))}
      </form>
      <div className="h-[10px] mt-2 sm:ml-auto w-full sm:w-1/4">
        <ButtonComponent
          label={"Add dish"}
          className={"w-full px-5 py-2.5 mr-2 mb-2"}
          onClick={handleBtnClick}
        ></ButtonComponent>
      </div>
    </div>
  );
};

export default AddItem;
