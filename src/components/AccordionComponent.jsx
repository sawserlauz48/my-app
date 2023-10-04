import { useState } from "react";
import { arrowAcc } from "../images/svgs";
import OrderComponent from "./OrderComponent";
const AccordionComponent = () => {
  const [isstate, setState] = useState("hidden");

  const handleEditBtn = () => {
    if (isstate === "hidden") {
      setState("block");
    }
    if (isstate === "block") {
      setState("hidden");
    }
  };
  return (
    <div>
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          class="flex items-center justify-between w-full py-5 px-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 "
          onClick={handleEditBtn}
        >
          <div className="flex gap-x-6 sm:gap-x-7 md:gap-14">
            <span>Order number:#324456456 </span>
            <span className="hidden sm:block">items:5</span>
            <span>total:270$</span>
          </div>
          {arrowAcc}
        </button>
      </h2>
      <div class={isstate}>
        <div class="py-5 px-10 border-b border-gray-200 dark:border-gray-700 ">
          <OrderComponent />
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
