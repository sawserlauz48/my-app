import { useNavigate, useParams } from "react-router-dom";
import CheckboxComponent from "../components/CheckboxComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent";
import { close } from "../images/svgs";

const ItemInfo = () => {
  const { id } = useParams();
  const navagite = useNavigate();
  const [state, setState] = useState({
    image: { url: "", alt: "" },
    ingredients: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/items/" + id);
        let newState = {
          ...data,
        };
        delete newState.__v;
        delete newState.user_id;
        delete newState.createdAt;
        setState(newState);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);

  const closeItemInfo = () => {
    navagite("/takeaway");
  };

  const handleDivClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={closeItemInfo}
      className=" fixed itemInfo flex flex-col w-full bg-lightmode-bg/50 dark:bg-darkmode-accent/50 sm:p-[48px]  top-0 left-0 z-[999] h-full items-center justify-center"
    >
      <div
        onClick={handleDivClick}
        className=" relative  bg-lightmode-accent border dark:border-slate-700 h-max overflow-y-auto
        border-slate-50 dark:bg-darkmode-accent rounded-[4px] p-[20px] w-full md:w-3/4 shadow-slate-600 shadow-md"
      >
        <span
          onClick={closeItemInfo}
          className=" absolute top-2 right-2 text-white bg-lightmode-pBtn rounded-sm border-slate-300 border-[1px] shadow-md hover:cursor-pointer"
        >
          {close}
        </span>
        <div className="flex flex-col items-center sm:items-start space-x-7 space-y-4 sm:flex-row ">
          <div>
            <img
              src={state.image.url}
              alt={state.image.alt}
              className="w-[280px]"
            />
          </div>
          <div className="space-y-4">
            <div className=" font-bold text-4xl">{state.title}</div>
            <div className="text-md">{state.description}</div>
          </div>
        </div>
        <div className=" relative inline-flex items-center justify-center w-full py-2 mt-10 ">
          <hr className=" w-3/4 h-[2px] bg-slate-300 border-0 dark:bg-slate-700 " />
          <div className=" absolute  flex items-center rounded-[25px] px-3 font-medium text-white -translate-x-1/2 bg-lightmode-pBtn left-1/2 dark:text-white  border-[10px] border-lightmode-accent dark:border-darkmode-accent">
            <span className=" relative bottom-[2px]">additions</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-[48px] py-2 mt-3 ">
          {state.ingredients.map((item) => (
            <div key={item}>
              <CheckboxComponent title={item} label={item}></CheckboxComponent>
            </div>
          ))}
        </div>
        <div className=" relative inline-flex items-center justify-center w-full mt-10 ">
          <hr className=" w-3/4 h-[2px] bg-slate-300 border-0 dark:bg-slate-700 " />
          <div className=" absolute  flex items-center rounded-[25px] px-3 font-medium text-white -translate-x-1/2 bg-lightmode-pBtn left-1/2 dark:text-white  border-[10px] border-lightmode-accent dark:border-darkmode-accent">
            <span className=" relative bottom-[2px]">special instruction</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-x-5 mt-5">
          <div className="relative z-0 mt-1 w-full sm:w-3/4 ">
            <textarea
              className="block py-2.5 px-0  w-full  text-sm text-lightmode-text bg-transparent border-0 border-b-2 border-lightmode-pBtn appearance-none dark:text-darkmode-text dark:border-blue-900 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-lightmode-pBtn peer"
              placeholder={" "}
              name=""
              id="text"
            ></textarea>
            <label
              htmlFor={"text"}
              className="flex absolute text-md text-lightmode-text dark:text-darkmode-text duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightmode-pBtn peer-focus:dark:text-darkmode-pBtn peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter instruction here
            </label>
          </div>
          <div className="h-[10px] mt-2 sm:ml-auto w-full sm:w-1/4">
            <ButtonComponent label={"Add dish"}></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
