import axios from "axios";
import Listcomponent from "../components/ListComponent";
import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import { Outlet, useNavigate } from "react-router-dom";
import { buyIcon, gridIcon, listIcon, plusIcon } from "../images/svgs";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itmes";
import newImage from "../images/new_picture.JPG";
import ROUTES from "../routes/ROUTES";

const TakeAway = () => {
  const [Items, setAllItems] = useState([]);
  const [display, setDisplay] = useState("grid");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdmin = useSelector((bigPie) => bigPie.adminAuthSlice.isAdmin);
  useEffect(() => {
    axios
      .get("items/")
      .then(({ data }) => {
        setAllItems(data.allItems);
      })
      .catch((err) => {
        console.log(err.response, "err");
      });
  }, []);
  const handleItemClick = (id) => {
    navigate(`/takeaway/${id}`);
  };
  const gridIconBtn = () => {
    setDisplay("grid");
  };
  const listIconBtn = () => {
    setDisplay("list");
  };
  const handlePlusBtnClick = async (id, ing, image, title, price) => {
    let ingredients = ing.reduce((acc, item) => {
      acc[item] = true;
      return acc;
    }, {});
    try {
      await axios.patch(`/users/cart/`, {
        item: id,
        title,
        image: image,
        ingredients: ingredients,
        specialInstruction: "",
        price: price,
      });
      await axios
        .get("users/cart/get-my-cart")
        .then(({ data }) => {
          dispatch(itemActions.addItemsLength(data.myCart.length));
        })
        .catch((err) => {
          console.log(err.response, "err");
        });
      toast.success("item has been added to the cart");
    } catch (error) {
      toast.error("couldn't add the item to the cart");
      console.log(error);
    }
  };
  console.log(isAdmin);
  const handleAddItemClick = () => {
    navigate(ROUTES.ADDITEM);
  };
  const handleEditBtn = () => {};
  return (
    <div className="relative">
      <div>
        <span
          onClick={gridIconBtn}
          className="  bg-lightmode-bg absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[2px] shadow-xl rounded-[0.2rem] dark:border-slate-400 dark:hover:bg-slate-700 dark:bg-darkmode-bg hover:cursor-pointer border-[1px] border-slate-100 hover:bg-orange-200"
        >
          {gridIcon}
        </span>
        <span
          onClick={listIconBtn}
          className=" bg-lightmode-bg absolute top-[10px] right-[50px] w-[30px] h-[30px] p-[2px] shadow-xl rounded-[0.2rem] dark:border-slate-400 dark:hover:bg-slate-700 dark:bg-darkmode-bg hover:cursor-pointer border-[1px] border-slate-100 hover:bg-orange-200"
        >
          {listIcon}
        </span>
      </div>
      <div>
        <span
          onClick={gridIconBtn}
          className="  bg-lightmode-bg absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[2px] shadow-xl rounded-[0.2rem] dark:border-slate-400 dark:hover:bg-slate-700 dark:bg-darkmode-bg hover:cursor-pointer border-[1px] border-slate-100 hover:bg-orange-200"
        >
          {gridIcon}
        </span>
        <span
          onClick={listIconBtn}
          className=" bg-lightmode-bg absolute top-[10px] right-[50px] w-[30px] h-[30px] p-[2px] shadow-xl rounded-[0.2rem] dark:border-slate-400 dark:hover:bg-slate-700 dark:bg-darkmode-bg hover:cursor-pointer border-[1px] border-slate-100 hover:bg-orange-200"
        >
          {listIcon}
        </span>
      </div>
      {display === "grid" ? (
        <div
          className="listGrid grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   bg-lightmode-accent border dark:border-slate-700
      border-slate-50 dark:bg-darkmode-accent  rounded-lg overflow-auto gap-y-6 gap-x-3"
        >
          {Items.map((item) => (
            <CardComponent
              title={item.title}
              key={item.title}
              id={item._id}
              name={item.title}
              price={item.price + " " + "₪"}
              description={item.description}
              image={item.image.url}
              ing={item.ingredients}
              icon={buyIcon}
              onEditClick={handleEditBtn}
              onItemClick={handleItemClick}
              onPlusBtnClick={handlePlusBtnClick}
            ></CardComponent>
          ))}
          {isAdmin ? (
            <CardComponent
              image={newImage}
              name={"Add new item"}
              description={"Click here to add a new item "}
              display={"hidden"}
              onItemClick={handleAddItemClick}
              icon={plusIcon}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      {display === "list" ? (
        <div
          className="listGrid container grid grid-cols-1   bg-lightmode-accent border dark:border-slate-700
      border-slate-50 dark:bg-darkmode-accent  rounded-lg overflow-auto gap-5 hover:cursor-pointer"
        >
          {Items.map((item) => (
            <Listcomponent
              title={item.title}
              key={item.title}
              id={item._id}
              name={item.title}
              price={item.price + " " + "₪"}
              description={item.description}
              image={item.image.url}
              ing={item.ingredients}
              icon={buyIcon}
              onEditClick={handleEditBtn}
              onItemClick={handleItemClick}
              onPlusBtnClick={handlePlusBtnClick}
            ></Listcomponent>
          ))}
          {isAdmin ? (
            <Listcomponent
              image={newImage}
              name={"Add new item"}
              description={"Click here to add a new item "}
              display={"hidden"}
              onItemClick={handleAddItemClick}
              icon={plusIcon}
              price={""}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
      <Outlet />
    </div>
  );
};

export default TakeAway;
