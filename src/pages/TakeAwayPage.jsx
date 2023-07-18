import axios from "axios";
import Listcomponent from "../components/ListComponent";
import { useEffect, useState } from "react";
import CardComponent from "../components/CardComponent";

const TakeAway = () => {
  const [Items, setAllItems] = useState([]);

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
  console.log(Items, "Items");
  return (
    <div
      className="listGrid container grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2   bg-lightmode-accent border dark:border-slate-700
 border-slate-50 dark:bg-darkmode-accent  rounded-lg overflow-auto gap-5"
    >
      {/* {Items.map((item) => (
          <Listcomponent
          key={item.title}
          name={item.title}
          price={item.price}
          description={item.description}
          image={item.image.url}
          ></Listcomponent>
        ))} */}
      {Items.map((item) => (
        <CardComponent
          key={item.title}
          name={item.title}
          price={item.price}
          description={item.description}
          image={item.image.url}
        ></CardComponent>
      ))}
    </div>
  );
};

export default TakeAway;
