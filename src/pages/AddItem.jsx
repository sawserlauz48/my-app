import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import ButtonComponent from "../components/ButtonComponent";
import { close, plusIcon } from "../images/svgs";
import { toast } from "react-toastify";
import InputComponent from "../components/InputComponent";
import RadioComponent from "../components/RadioComponent";
import ROUTES from "../routes/ROUTES";
import validateCreatItemSchema from "../validations/createItemValidation";
import AlertComponent from "../components/AlertComponent";

const inputs = [
  { label: "Title *", name: "title", isReq: true },
  { label: "Description  *", name: "description", isReq: true },
  { label: "Price *", name: "price", isReq: true },
  { label: "Image alt", name: "imageAlt", isReq: true },
];

const course = [
  { label: "Salad", name: "salad" },
  { label: "Starter", name: "starter" },
  { label: "Pastries", name: "pastries" },
  { label: "Sandwiches", name: "sandwiches" },
  { label: "Main", name: "main" },
  { label: "Drinks", name: "drinks" },
];
const Dietary = [
  { label: "All", name: "all" },
  { label: "Vegetarian", name: "vegetarian" },
  { label: "Vegan", name: "vegan" },
];
const AddItem = () => {
  const [state, setState] = useState({
    title: "",
    description: "",
    imageUrl: "",
    imageAlt: "",
    price: "",
    dietary: "",
    course: "",
    ingredients: "",
  });
  const [inputsErrorsState, setInputsErrorsState] = useState();
  const [inputIngredients, setInputs] = useState([]);
  const [imageState, setImageState] = useState({ myFile: "" });
  const navigate = useNavigate();
  const addInput = () => {
    setInputs([...inputIngredients, ""]); // Add a new input element to the list
  };

  const deleteInput = (index) => {
    const newInputs = inputIngredients.filter((item, i) => i !== index);
    setInputs(newInputs);
  };
  const handleCourseBtnClick = (event) => {
    let newInputState = JSON.parse(JSON.stringify(state));
    newInputState["course"] = event.target.innerHTML;
    setState(newInputState);
  };
  const handleDietaryBtnClick = (event) => {
    let newInputState = JSON.parse(JSON.stringify(state));
    newInputState["dietary"] = event.target.innerHTML;
    setState(newInputState);
  };
  const handleInputChange = (event) => {
    let newInputState = JSON.parse(JSON.stringify(state));
    newInputState[event.target.id] = event.target.value;
    setState(newInputState);
  };
  const handleInputIngredients = (index, value) => {
    const newInputs = [...inputIngredients];
    newInputs[index] = value;
    setInputs(newInputs);
    let newInputState = JSON.parse(JSON.stringify(state));
    newInputState["ingredients"] = inputIngredients;
    setState(newInputState);
  };

  const handleAddBtnClick = async () => {
    try {
      const joiResponse = validateCreatItemSchema(state);
      setInputsErrorsState(joiResponse);
      if (joiResponse) {
        return;
      }
      const deleteEmptyIngredients = inputIngredients.filter((item) => item);
      state.ingredients = deleteEmptyIngredients;
      await axios.post("items/", {
        title: state.title,
        description: state.description,
        price: state.price,
        dietary: state.dietary,
        course: state.course,
        ingredients: state.ingredients,
        image: {
          data: imageState.myFile,
          alt: state.imageAlt,
        },
      });
      toast.success("Item added successfully");
      navigate(ROUTES.TAKEAWAY);
    } catch (err) {
      toast.error(err);
    }
  };
  const closeItemInfo = () => {
    navigate("/takeaway");
  };

  const handleDivClick = (event) => {
    event.stopPropagation();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleFileUplaod = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertTo64(file);
    console.log(base64, "base64");
    setImageState({ ...imageState, myFile: base64 });
  };
  const convertTo64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div onClick={closeItemInfo} className="outerDiV">
      <div className=" innerDiv">Add item</div>
      <div onClick={handleDivClick} className="stopPropagationDiv">
        <form onSubmit={handleSubmit}>
          <span onClick={closeItemInfo} className="spanDiv ">
            {close}
          </span>
          <div className="flex flex-col items-center sm:items-start space-x-7 space-y-4 sm:flex-row ">
            <div>
              <label htmlFor="fileUpload" className="cursor-pointer">
                <img
                  htmlFor="fileUpload"
                  id="addImage"
                  src={
                    imageState.myFile ||
                    "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg"
                  }
                  alt={"defult picture"}
                  className="w-[280px] cursor-pointer"
                />
              </label>
              <input
                type="file"
                name="myFile"
                id="fileUpload"
                className=" opacity-0"
                accept=".jpeg,.png,.jpg"
                onChange={(event) => handleFileUplaod(event)}
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
                    inputsErrorsState={inputsErrorsState}
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
          </div>
          <div className="flex flex-col">
            <div className="">
              <AlertComponent
                inputsErrorsState={inputsErrorsState}
                name={"ingredients"}
                className={"rounded-lg "}
              />
              <ButtonComponent
                label={"Add Input"}
                onClick={addInput}
                className={"rounded-md px-5 py-2.5 mr-2 mb-2 mt-5"}
              />
            </div>
            <div className="flex flex-wrap justify-start items-center mt-5 ml-[12%]">
              {inputIngredients.map((inputValue, index) => (
                <div className="flex justify-center items-center" key={index}>
                  <InputComponent
                    label={"Add ingredient"}
                    name={"ingredient"}
                    className="mx-2 my-2 p-1 dark:text-black"
                    type="text"
                    value={inputValue}
                    onChange={(e) =>
                      handleInputIngredients(index, e.target.value)
                    }
                    inputsErrorsState={inputsErrorsState}
                    inputState={state}
                  />
                  <ButtonComponent
                    icon={close}
                    className="bg-red-500 rounded-[50%] p-[2px] border-[3px] hover:bg-red-400 relative top-[-16px] right-[22px] w-6 h-6   flex justify-center items-center
              "
                    onClick={() => deleteInput(index)}
                  ></ButtonComponent>
                </div>
              ))}
            </div>
          </div>
          <div className=" relative inline-flex items-center justify-center w-full py-2 mt-10 ">
            <hr className=" w-3/4 h-[2px] bg-slate-300 border-0 dark:bg-slate-700 " />
            <div className=" absolute  flex items-center rounded-[25px] px-3 font-medium text-white -translate-x-1/2 bg-lightmode-pBtn left-1/2 dark:text-white  border-[10px] border-lightmode-accent dark:border-darkmode-accent">
              <span className=" relative bottom-[2px]">Dietary</span>
            </div>
          </div>
          <form className="flex flex-wrap justify-center mt-5">
            <AlertComponent
              inputsErrorsState={inputsErrorsState}
              name={"dietary"}
              onChange={handleDietaryBtnClick}
              className={"rounded-lg "}
            />
            {Dietary.map((input) => (
              <div key={input.label}>
                <RadioComponent
                  label={input.label}
                  onClick={handleDietaryBtnClick}
                  title={input.label}
                  name={"Dietary"}
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
            <AlertComponent
              inputsErrorsState={inputsErrorsState}
              name={"course"}
              onChange={handleDietaryBtnClick}
              className={"rounded-lg "}
            />
            {course.map((input) => (
              <div key={input.label}>
                <RadioComponent
                  label={input.label}
                  onClick={handleCourseBtnClick}
                  title={input.label}
                  name={"course"}
                ></RadioComponent>
              </div>
            ))}
          </form>
          <div className="h-[10px] mt-2 sm:ml-auto w-full sm:w-1/4">
            <ButtonComponent
              label={"Add dish"}
              className={"w-full px-5 py-2.5 mr-2 mb-2"}
              onClick={handleAddBtnClick}
            ></ButtonComponent>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
