import React, { useEffect, useState } from "react";
import CartListComponent from "../components/CartListComponent";
import axios from "axios";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/itmes";
import ButtonComponent from "../components/ButtonComponent";
import { creditCard, infoIcon, truckIcon } from "../images/svgs";
import ROUTES from "../routes/ROUTES";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const [Items, setAllItems] = useState([]);
  const [display, setDisplay] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("users/cart/get-my-cart")
      .then(({ data }) => {
        setAllItems(data.myCart);
      })
      .catch((err) => {
        toast.error(err.response);
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
        toast.error(err.response);
      });
  };
  const handleSaveBtn = async () => {
    await axios
      .get("users/cart/get-my-cart")
      .then(({ data }) => {
        setAllItems(data.myCart);
        console.log("here");
      })
      .catch((err) => {
        toast.error(err.response);
      });
  };
  const handleBuyBtn = async () => {
    await axios.patch("users/cart/reset");
    dispatch(itemActions.addItemsLength(0));
    setAllItems([]);
  };
  const handleTakeAwayBtn = () => {
    navigate(ROUTES.TAKEAWAY);
  };
  const handleDisplay = (event) => {
    setDisplay(event.target.innerHTML);
  };
  console.log(display, "display");
  const priceArr = Items.map((item) => item.price);
  const total = priceArr.reduce((sum, price) => sum + +price, 0);

  return (
    <div className="flex flex-col w-full">
      <div
        className="sm:p-[48px] bg-lightmode-accent border dark:border-slate-700
      border-slate-50 dark:bg-darkmode-accent rounded-t-lg overflow-auto gap-5 "
      >
        {Items.length != 0 ? (
          Items.map((item, index) => (
            <div className="" key={item.title + Date.now() + index}>
              <CartListComponent
                image={item.image}
                title={item.title}
                price={item.price}
                instractions={item.specialInstruction}
                onClickCloseBtn={handleDeleteBtn}
                ingredients={item.ingredients}
                id={item._id}
                onClickSaveBtn={handleSaveBtn}
              />
            </div>
          ))
        ) : (
          <div className="flex gap-3">
            <>
              {infoIcon}
              The cart is empty
            </>
          </div>
        )}
      </div>
      <div className="bg-lightmode-bg border-x-[2px] border-lightmode-pBtn h-16 flex flex-col w-full justify-center items-center dark:bg-blue-950 dark:border-slate-700">
        <div>Total: {total} ₪</div>
        <div>Items: {Items.length}</div>
      </div>
      <div>
        {Items.length != 0 ? (
          <ButtonComponent
            label={"BUY"}
            className={"w-full px-5 py-2.5 mr-2 mb-2 justify-center flex gap-3"}
            onClick={handleBuyBtn}
            icon={creditCard}
          />
        ) : (
          <ButtonComponent
            label={"order now"}
            className={"w-full px-5 py-2.5 mr-2 mb-2 justify-center flex gap-3"}
            onClick={handleTakeAwayBtn}
            icon={truckIcon}
          />
        )}
      </div>
    </div>
  );
};

export default Checkout;
