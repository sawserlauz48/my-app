import React from "react";

const Checkout = () => {
  return (
    <div className="p-[48px] bg-lightmode-accent dark:bg-darkmode-accent w-1/4 h-[550px]">
      <div className=" order w-full h-full border-[1px] border-gray-900 rounded-lg flex flex-col items-center">
        <div className="text-4xl">ORDER:</div>
        <div className="grid grid-cols-2 w-full p-[48px]">
          <div className="justify-self-start">asknder</div>
          <div className="justify-self-end">70</div>
          <div className="justify-self-start">salat aof</div>
          <div className="justify-self-end">30</div>
          <div className="justify-self-start">ravioli</div>
          <div className="justify-self-end">25</div>
          <div className="justify-self-start">mataza</div>
          <div className="justify-self-end">55</div>
          <div className="justify-self-start">lehem shum</div>
          <div className="justify-self-end">78</div>
          <div className="justify-self-start">lehem majon</div>
          <div className="justify-self-end">56</div>
          <div className="justify-self-start">cola</div>
          <div className="justify-self-end">65</div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
