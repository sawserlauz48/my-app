import { useNavigate, useParams } from "react-router-dom";
import CheckboxComponent from "../components/CheckboxComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const ItemInfo = () => {
  const { id } = useParams();
  const navagite = useNavigate();
  const [checkboxState, setCheckboxState] = useState("");
  const [state, setState] = useState({
    image: { url: "", alt: "" },
    ingredients: [],
  });

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
        console.log(err);
      }
    })();
  }, [id]);

  const closeItemInfo = () => {
    navagite("/takeaway");
  };

  const handleDivClick = (event) => {
    event.stopPropagation();

    console.log("clicked div");
  };
  const handleCheckClick = () => {
    event.stopPropagation();
    if ((checkboxState = "")) {
      setCheckboxState("checked");
    }
  };

  return (
    <div
      onClick={closeItemInfo}
      className="itemInfo flex flex-col w-full  bg-lightmode-bg/50 dark:bg-darkmode-accent/50 sm:p-[48px] overflow-auto fixed top-0 left-0 z-[999] h-full items-center"
    >
      <div
        onClick={handleDivClick}
        className="bg-lightmode-accent border dark:border-slate-700 h-full
        border-slate-50 dark:bg-darkmode-accent w-full md:w-3/4  overflow-auto"
      >
        <div className="grid grid-cols-2 gap-5">
          <div>
            <img src={state.image.url} alt={state.image.alt} />
          </div>
          <div>{state.description}</div>
        </div>
        <div className="grid grid-cols-2">
          {state.ingredients.map((item) => (
            <div key={item}>
              <CheckboxComponent
                label={item}
                onClick={handleCheckClick}
                checkboxState={checkboxState}
              ></CheckboxComponent>
            </div>
          ))}
          {console.log(state, "inpopo")}
        </div>
        <CheckboxComponent label={"asdasd"}></CheckboxComponent>
      </div>
    </div>
  );
};

export default ItemInfo;
