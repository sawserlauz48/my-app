import React, { useEffect, useState } from "react";
import CartListComponent from "../components/CartListComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/itmes";

const Checkout = () => {
  const [Items, setAllItems] = useState([]);

  useEffect(() => {
    axios
      .get("users/cart/get-my-cart")
      .then(({ data }) => {
        console.log(data.myCart);
        setAllItems(data.myCart);
      })
      .catch((err) => {
        console.log(err.response, "err");
      });
  }, []);
  const handleCloseBtn = () => {
    // dispatch(itemActions.subtractItemsLength());
  };
  const HandleEditBtn = () => {};

  return (
    <div
      className="listGrid container grid grid-cols-1   bg-lightmode-accent border dark:border-slate-700
      border-slate-50 dark:bg-darkmode-accent  rounded-lg overflow-auto gap-5 hover:cursor-pointer"
    >
      {Items.map((item) => (
        <div className="">
          <CartListComponent
            image={item.image}
            title={item.title}
            price={item.price}
            instractions={item.specialInstruction}
            onClickCloseBtn={handleCloseBtn}
            onClickEditBtn={HandleEditBtn}
          />
        </div>
      ))}
    </div>
  );
};

export default Checkout;
