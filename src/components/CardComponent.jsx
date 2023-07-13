const CardComponent = (name, price, discription, img) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-lightmode-bg border-lightmode-pBtn hover:bg-orange-200 dark:bg-darkmode-accent dark:border-blue-900 dark:hover:bg-blue-900">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-lightmode-text dark:text-darkmode-text">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-slate-500 dark:text-slate-500">
          {discription}
        </p>
        <p
          className="mb-3 font-normal text-slate-900 dark:text-slate-300
        "
        >
          {price}
        </p>
      </div>
    </div>
  );
};

export default CardComponent;
