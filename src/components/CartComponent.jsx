import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/itmes";

const CartComponent = () => {
  const navigate = useNavigate();
  const itemsInCart = useSelector((bigpie) => bigpie.itemSlice.items);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("users/cart/get-my-cart")
      .then(({ data }) => {
        dispatch(itemActions.addItemsLength(data.myCart.length));
      })
      .catch((err) => {
        console.log(err.response, "err");
      });
  }, []);

  const handleClick = () => {
    navigate(ROUTES.CHECKOUT);
  };

  return (
    <div className="fixed">
      <button
        onClick={handleClick}
        className=" text-white bg-lightmode-pBtn w-[60px] h-[60px] flex justify-center items-center rounded-[50%] fixed bottom-5 right-5 hover:bg-orange-300"
      >
        <div className="bg-lightmode-bg rounded-[50%]  w-[24px] h-[24px] text-[0.6rem] text-black border-[3px] border-orange-300 flex justify-center items-center absolute top-[-5px] right-[-5px]">
          {itemsInCart}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartComponent;
