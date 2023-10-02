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

const ItemInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    image: { url: "", alt: "" },
    ingredients: [],
  });
  const [inputState, setInputState] = useState("");
  const [checkBoxState, setCheckBoxState] = useState("");

  useEffect(() => {
    const ing = state.ingredients.reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {});
    setCheckBoxState(ing);
  }, [state]);

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
        toast.error(err.response);
      }
    })();
  }, [id]);

  const closeItemInfo = () => {
    navigate("/takeaway");
  };

  const handleDivClick = (event) => {
    event.stopPropagation();
  };
  const handleBuyClick = async () => {
    const unChekedIngredients = Object.keys(checkBoxState)
      .filter((key) => !checkBoxState[key])
      .map((key) => `without ${key} `);
    try {
      await axios.patch(`/users/cart/`, {
        item: id,
        ingredients: checkBoxState,
        specialInstruction: unChekedIngredients + " " + inputState,
        title: state.title,
        image: state.image.url,
        price: state.price,
      });
      await axios
        .get("users/cart/get-my-cart")
        .then(({ data }) => {
          dispatch(itemActions.addItemsLength(data.myCart.length));
        })
        .catch((err) => {
          toast.error(err.response);
        });
      toast.success("item has been added to the cart");
    } catch (error) {
      toast.error("couldn't add the item to the cart");
      toast.error(err.response);
    }
    navigate("/takeaway");
  };
  const handleInputChange = (event) => {
    let newInputState = JSON.parse(JSON.stringify(inputState));
    newInputState = event.target.value;
    setInputState(newInputState);
  };
  const handleClick = (event) => {
    let newCheckBoxState = JSON.parse(JSON.stringify(checkBoxState));
    newCheckBoxState[event.target.id] = event.target.checked;
    setCheckBoxState(newCheckBoxState);
  };

  return (
    <div onClick={closeItemInfo} className="outerDiV">
      <div className="innerDiv">Item info</div>
      <div onClick={handleDivClick} className="stopPropagationDiv ">
        <span onClick={closeItemInfo} className="spanDiv ">
          {close}
        </span>
        <div className="flex flex-col items-center sm:items-start space-x-7 space-y-4 sm:flex-row ">
          <div>
            <img
              src={`${state.image.data}`}
              alt={state.image.alt}
              className="w-[280px]"
            />
          </div>
          <div className="space-y-4 flex flex-col">
            <div className=" font-bold text-4xl">{state.title}</div>
            <div className="text-md">{state.description}</div>
            <div className=" w-32">
              Quantity:
              <QuantityComponent bg={"bg"}></QuantityComponent>
            </div>
          </div>
        </div>
        <div className=" relative inline-flex items-center justify-center w-full py-2 mt-10 ">
          <hr className=" w-3/4 h-[2px] bg-slate-300 border-0 dark:bg-slate-700 " />
          <div className=" absolute  flex items-center rounded-[25px] px-3 font-medium text-white -translate-x-1/2 bg-lightmode-pBtn left-1/2 dark:text-white  border-[10px] border-lightmode-accent dark:border-darkmode-accent">
            <span className=" relative bottom-[2px]">additions</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 px-[48px] py-2 mt-3 ">
          {state &&
            state.ingredients.map((item) => (
              <div key={item}>
                <CheckboxComponent
                  title={item}
                  label={item}
                  state={checkBoxState}
                  onClick={handleClick}
                  type={"checkbox"}
                ></CheckboxComponent>
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
              name="text"
              id="text"
              value={inputState}
              onChange={handleInputChange}
            ></textarea>
            <label
              htmlFor={"text"}
              className="flex absolute text-md text-lightmode-text dark:text-darkmode-text duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightmode-pBtn peer-focus:dark:text-darkmode-pBtn peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Enter instruction here
            </label>
          </div>
          <div className="h-[10px] mt-2 sm:ml-auto w-full sm:w-1/4">
            <ButtonComponent
              label={"Add dish " + "( " + state.price + " ₪ )"}
              className={"w-full px-5 py-2.5 mr-2 mb-2"}
              onClick={handleBuyClick}
            ></ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
