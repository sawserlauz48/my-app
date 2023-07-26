import axios from "axios";
import Listcomponent from "../components/ListComponent";
import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";
import { Outlet, useNavigate } from "react-router-dom";
import { gridIcon, listIcon } from "../images/svgs";

const TakeAway = () => {
  const [Items, setAllItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8181/api/items/")
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
  return (
    <div className="relative">
      <div>
        <span className="  bg-lightmode-bg absolute top-[10px] right-[10px] w-[30px] h-[30px] p-[2px] shadow-xl rounded-[0.2rem] dark:border-slate-400 dark:hover:bg-slate-700 dark:bg-darkmode-bg hover:cursor-pointer border-[1px] border-slate-100 hover:bg-orange-200">
          {gridIcon}
        </span>
        <span className=" bg-lightmode-bg absolute top-[10px] right-[50px] w-[30px] h-[30px] p-[2px] shadow-xl rounded-[0.2rem] dark:border-slate-400 dark:hover:bg-slate-700 dark:bg-darkmode-bg hover:cursor-pointer border-[1px] border-slate-100 hover:bg-orange-200">
          {listIcon}
        </span>
      </div>
      <div
        className="listGrid grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   bg-lightmode-accent border dark:border-slate-700
      border-slate-50 dark:bg-darkmode-accent  rounded-lg overflow-auto gap-5"
      >
        {Items.map((item) => (
          <CardComponent
            key={item.title}
            id={item._id}
            name={item.title}
            price={item.price}
            description={item.description}
            image={item.image.url}
            onItemClick={handleItemClick}
          ></CardComponent>
        ))}
      </div>
      {/* <div
        className="listGrid container grid grid-cols-1   bg-lightmode-accent border dark:border-slate-700
      border-slate-50 dark:bg-darkmode-accent  rounded-lg overflow-auto gap-5"
      >
        {Items.map((item) => (
          <Listcomponent
            key={item.title}
            id={item._id}
            name={item.title}
            price={item.price}
            description={item.description}
            image={item.image.url}
            onItemClick={handleItemClick}
          ></Listcomponent>
        ))}
      </div> */}
      <Outlet />
    </div>
  );
};

export default TakeAway;
