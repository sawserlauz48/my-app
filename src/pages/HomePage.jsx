import { Fragment } from "react";
import imagePlace from "../images/DSC_2477.JPG";
import ButtonComponent from "../components/ButtonComponent";
import { useSelector } from "react-redux";

const HomePage = () => {
  // const isLoggedIn = useSelector((bigPie) => bigPie.authSlice.isLoggedIn);
  return (
    <div className="flex flex-col">
      <div className="">
        <img
          className="h-auto max-w-full"
          src={imagePlace}
          alt="image description"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-7 my-5 px-5">
        <div className=" h-52 relative p-5 flex flex-col bg-lightmode-accent dark:bg-darkmode-accent border rounded-xl border-slate-50 dark:border-slate-700">
          <h1 className="my-2 text-3xl font-bold ">Make a reservation</h1>
          <p className="my-2">
            Want to make a reservation of table click the link below to make a
            reservation in another date
          </p>
          <div className=" absolute bottom-1 right-5 w-32">
            <ButtonComponent label={"order here"}></ButtonComponent>
          </div>
        </div>
        <div className="relative h-52 p-5 flex flex-col bg-lightmode-accent dark:bg-darkmode-accent border rounded-xl border-slate-50 dark:border-slate-700">
          <h1 className="my-2 text-3xl font-bold ">Order Take Away</h1>
          <p className="my-2">
            You can make a Take Away order and we will bring it to you
          </p>
          <div className="absolute bottom-1 right-5 w-32">
            <ButtonComponent label={"order here"}></ButtonComponent>
          </div>
        </div>
      </div>
      <div className="grid justify-items-center md:grid-cols-3 gap-7 my-5 px-5">
        <div className="flex flex-col  gap-2">
          <div className="self-center font-bold text-xl">address</div>
          <div className="self-center">da,Kfar kama,Israel</div>
          <div className="self-center">
            <a>link</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="self-center font-bold text-xl">hours</div>
          <div>Monday - Friday</div>
          <div className="self-center">19:00-22:00</div>
          <div className="self-center"> Saturday</div>
          <div className="self-center">13:00-22:00</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="self-center font-bold text-xl">contact</div>
          <div className="self-center">054-4698522</div>
          <div className="self-center">Anatolia@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
