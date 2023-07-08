import imagePlace from "../images/DSC_2460.JPG";

const Listcomponent = () => {
  return (
    <div>
      <ul>
        <li className="listLi my-2 px-1 grid grid-cols-12 gap-1 content-center h-20 bg-lightmode-accent rounded-sm dark:bg-darkmode-accent">
          <div className="listTitle col-span-3 col-start-1 font-bold self-center">
            iskander kebab
          </div>
          <div className="listDis col-span-5 col-start-4 dark:text-slate-400 text-slate-600 self-center">
            kebab with bread with tometo souce and yogurt with cheri and parsly
          </div>
          <div className=" listPrice col-span-1 col-start-9 colst dark:text-slate-300 text-slate-800 justify-self-center self-center ">
            70$
          </div>
          <div className=" listImage col-span-3 col-start-10 justify-self-end">
            <img className=" rounded-sm " src={imagePlace} alt="" />
          </div>
        </li>
        <li className="listLi my-2 px-1 grid grid-cols-12 gap-1 content-center h-20 bg-lightmode-accent rounded-sm dark:bg-darkmode-accent">
          <div className="listTitle col-span-3 col-start-1 font-bold self-center">
            iskander kebab
          </div>
          <div className="listDis col-span-5 col-start-4 dark:text-slate-400 text-slate-600 self-center">
            kebab with bread with tometo souce and yogurt with cheri and parsly
          </div>
          <div className=" listPrice col-span-1 col-start-9 colst dark:text-slate-300 text-slate-800 justify-self-center self-center ">
            70$
          </div>
          <div className=" listImage col-span-3 col-start-10 justify-self-end">
            <img className=" rounded-sm " src={imagePlace} alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Listcomponent;
