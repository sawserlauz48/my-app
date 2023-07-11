import imagePlace from "../images/DSC_2460.JPG";
const CardComponent = () => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-lightmode-bg border-lightmode-pBtn hover:bg-orange-200 dark:bg-darkmode-accent dark:border-blue-900 dark:hover:bg-blue-900">
      <a href="#">
        <img className="rounded-t-lg" src={imagePlace} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lightmode-text dark:text-darkmode-text">
            Iskander Kebab
          </h5>
        </a>
        <p className="mb-3 font-normal text-slate-500 dark:text-slate-500">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p
          className="mb-3 font-normal text-slate-900 dark:text-slate-300
        "
        >
          Price:70$
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
