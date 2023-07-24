import PropTypes from "prop-types";

const CardComponent = ({
  name,
  price,
  description,
  image,
  id,
  onOpen,
  onItemClick,
}) => {
  const openInfo = () => {
    onOpen(id);
  };
  const handleItemClick = () => {
    onItemClick(id);
  };
  return (
    <div
      onClick={handleItemClick}
      className="flex flex-col relative rounded-lg  shadow-lg border dark:border-r-[0.1px] dark:border-slate-700 border-r-[0.1px]border-slate-50 bg-lightmode-bg border-slate-pBtn hover:bg-orange-200 dark:bg-darkmode-accent  dark:hover:bg-blue-900 hover:cursor-pointer"
    >
      <div>
        <img className=" rounded-t-lg w-full" src={image} alt={name} />
      </div>
      <div className="p-5 h-full flex flex-col">
        <div className=" text-2xl font-bold tracking-tight text-lightmode-text dark:text-darkmode-text">
          {name}
        </div>
        <div className=" font-normal text-slate-500 dark:text-slate-500">
          {description}
        </div>
        <div
          className="mt-auto self-end font-normal text-slate-900 dark:text-slate-300
        "
        >
          {price}₪
        </div>
      </div>
    </div>
  );
};

CardComponent.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // onDelete: PropTypes.func,
  onOpen: PropTypes.func,
  // canEdit: PropTypes.bool,
};

CardComponent.defaultProps = {
  img: "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg",
  alt: "",
  canEdit: false,
};

export default CardComponent;
