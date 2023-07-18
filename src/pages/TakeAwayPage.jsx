import axios from "axios";
import Listcomponent from "../components/ListComponent";
import { useEffect, useState } from "react";

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
      className="grid grid-cols-2 w-full bg-lightmode-accent border dark:border-slate-700
 border-slate-50 dark:bg-darkmode-accent p-[48px] rounded-lg overflow-auto gap-2"
    >
      {Items.map((item) => (
        <Listcomponent
          name={item.title}
          price={item.price}
          description={item.description}
          image={item.image.url}
        ></Listcomponent>
      ))}
    </div>
  );
};

export default TakeAway;
