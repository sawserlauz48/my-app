import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TabComponent from "../components/Tab/TabComponnet";
import { clockIcon, hourGlass } from "../images/svgs";
import { useState } from "react";
import OrderComponent from "../components/OrderComponent";
import CartListComponent from "../components/CartListComponent";
import AccordionComponent from "../components/AccordionComponent";

const tabs = [
  {
    title: "Current order",
    icon: hourGlass,
  },
  {
    title: "Order history",
    icon: clockIcon,
  },
];
const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState("Current order");

  const handleRadioBtnClick = (event) => {
    let element = event.target;
    const checkifinnertext = (node) => {
      if (node.innerText) {
        setState(node.innerText);
      } else {
        let parent = node.parentNode;
        checkifinnertext(parent);
      }
    };
    checkifinnertext(element);
  };
  return (
    <div className="flex flex-col w-full">
      <div
        className="sm:p-[48px] bg-lightmode-accent dark:border-slate-700
      border-slate-50 dark:bg-darkmode-accent rounded-t-lg overflow-auto gap-5 "
      >
        <TabComponent
          tabArr={tabs}
          onClick={handleRadioBtnClick}
        ></TabComponent>
        {state === "Current order" ? (
          <div className="flex flex-col justify-center mt-3">
            <div className="mx-7">Order number: #4654324565</div>
            <OrderComponent />
            <div className="p-[48px]">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-lightmode-bg bg-lightmode-bg dark:ring-darkmode-bg dark:bg-darkmode-bg">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white animate-bounce"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                      />
                    </svg>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Order has been sent
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    19:28 on January 13th, 2022
                  </time>
                  <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    Wating for the beussnes to accept the order.
                  </p>
                </li>
                <li className="mb-10 ml-6 opacity-50">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-lightmode-bg bg-lightmode-bg dark:ring-darkmode-bg dark:bg-darkmode-bg">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h6m-6 4h6m-6 4h6M1 1v18l2-2 2 2 2-2 2 2 2-2 2 2V1l-2 2-2-2-2 2-2-2-2 2-2-2Z"
                      />
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Order has been accepted
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    19:29 on December 7th, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Your order is been preped.
                  </p>
                </li>
                <li className="ml-6 opacity-20">
                  <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-lightmode-bg bg-lightmode-bg dark:ring-darkmode-bg dark:bg-darkmode-bg">
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                  <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                    Order is ready
                  </h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    19:38 on December 2nd, 2021
                  </time>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    come pick up your order it is geting cold.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center mt-3">
            <div className="bg-lightmode-bg dark:bg-darkmode-bg rounded-md">
              <AccordionComponent />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
