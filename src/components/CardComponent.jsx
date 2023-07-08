import imagePlace from "../images/DSC_2460.JPG";
const CardComponent = () => {
  return (
    <div className=" m-1 dark:bg-darkmode-accent p-1 bg-lightmode-accent rounded-sm">
      <div className="cardImage">
        <img
          src={imagePlace}
          alt=""
          className=" rounded-sm col-span-1 place-self-center"
        />
      </div>
      <div className="cardText">
        <div className=" font-bold">title:iskander kebab</div>
        <div className=" dark:text-slate-400 text-slate-600">
          description: bread and kebab
        </div>
        <div className=" dark:text-slate-300 text-slate-800">price:70₪</div>
      </div>
    </div>
  );
};

export default CardComponent;
