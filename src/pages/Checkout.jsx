import React, { useEffect, useState } from "react";
import CartListComponent from "../components/CartListComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/itmes";
import ButtonComponent from "../components/ButtonComponent";

const Checkout = () => {
  const [Items, setAllItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const [inputTextState, setInputTextState] = useState("");

  useEffect(() => {
    axios
      .get("users/cart/get-my-cart")
      .then(({ data }) => {
        setAllItems(data.myCart);
      })
      .catch((err) => {
        console.log(err.response, "err");
      });
  }, []);

  const handleDeleteBtn = async (itemId) => {
    await axios
      .patch("users/cartItem/" + itemId)
      .then(({ data }) => {
        setAllItems(data);
        dispatch(itemActions.addItemsLength(data.length));
      })
      .catch((err) => {
        console.log(err.response, "err");
      });
  };
  const HandleEditBtn = () => {};
  const handleSaveBtn = async (
    id,
    price,
    image,
    title,
    checkBoxState,
    inputTextState
  ) => {
    setInputText(inputTextState);
    console.log(inputTextState, "inputTextState");
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
      .then(({ data }) => {
        setAllItems(data.myCart);
      })
      .catch((err) => {
        console.log(err.response, "err");
      });
  };
  const handleBuyBtn = async () => {
    await axios.patch("users/cart/reset");
  };

  return (
    <div className="flex flex-col">
      <div
        className="listGrid container grid md:grid-cols-2 lg:grid-cols-3 bg-lightmode-accent border dark:border-slate-700
      border-slate-50 dark:bg-darkmode-accent  rounded-lg overflow-auto gap-5 "
      >
        {Items.map((item, index) => (
          <div className="" key={item.title + Date.now() + index}>
            <CartListComponent
              image={item.image}
              title={item.title}
              price={item.price}
              instractions={item.specialInstruction}
              onClickCloseBtn={handleDeleteBtn}
              onClickEditBtn={HandleEditBtn}
              ingredients={item.ingredients}
              id={item._id}
              onClickSaveBtn={handleSaveBtn}
            />
          </div>
        ))}
      </div>
      <div className="">
        <ButtonComponent
          label={"BUY"}
          className={"w-1/2 px-5 py-2.5 mr-2 mb-2 justify-center"}
          onClick={handleBuyBtn}
        />
      </div>
    </div>
  );
};

export default Checkout;
