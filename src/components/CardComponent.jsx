import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import { close, editIcon } from "../images/svgs";
import { useSelector } from "react-redux";

const CardComponent = ({
  title,
  name,
  price,
  description,
  image,
  id,
  onItemClick,
  onPlusBtnClick,
  ing,
  display,
  icon,
  onEditClick,
  onDeleteClick,
  className,
}) => {
  const isAdmin = useSelector((bigPie) => bigPie.adminAuthSlice.isAdmin);
  const handleItemClick = () => {
    onItemClick(id);
  };
  const buyBtnClick = () => {
    onPlusBtnClick(id, ing, image, title, price);
  };
  const handleEditBtn = (event) => {
    onEditClick(id);
    event.stopPropagation();
  };
  const handleDeleteBtn = (event) => {
    onDeleteClick(id);
    event.stopPropagation();
  };
  const handleDivClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div
      onClick={handleItemClick}
      className="flex flex-col relative rounded-lg  shadow-lg border mt-5 dark:border-r-[0.1px] dark:border-slate-700 border-r-[0.1px]border-slate-50 bg-lightmode-bg border-slate-pBtn hover:bg-orange-200 dark:bg-darkmode-accent  dark:hover:bg-blue-900 hover:cursor-pointer"
    >
      {isAdmin ? (
        <div className={display}>
          <button
            onClick={handleDeleteBtn}
            className="bg-red-500 rounded-[50%] p-[5px] border-[3px] hover:bg-red-400 absolute top-[-15px] right-[4px] z-10 w-8 h-8 flex justify-center items-center
            "
          >
            {close}
          </button>
          <button
            onClick={handleEditBtn}
            className="bg-green-500 rounded-[50%] p-[5px] border-[3px] hover:bg-green-400 absolute top-[-15px] right-[40px] z-10 w-8 h-8 flex justify-center items-center
        "
          >
            {editIcon}
          </button>
        </div>
      ) : (
        ""
      )}

      <div>
        <img
          className=" rounded-t-lg w-full"
          src={image.data || image}
          alt={name}
        />
      </div>
      <div className="p-5 h-full flex flex-col">
        <div className=" text-2xl font-bold tracking-tight text-lightmode-text dark:text-darkmode-text">
          {name}
        </div>
        <div className=" font-normal text-slate-500 dark:text-slate-500">
          {description}
        </div>
        <div className=" flex items-stretch mt-auto">
          <div onClick={handleDivClick}>
            <ButtonComponent
              icon={icon}
              className={`${className}
                 h-[40px] w-[40px] flex justify-center items-center rounded-md mt-2`}
              onClick={buyBtnClick}
            />
          </div>
          <div
            className={`ml-auto self-end font-normal text-slate-900 dark:text-slate-300 ${display}
          " `}
          >
            {price} ₪
          </div>
        </div>
      </div>
    </div>
  );
};
CardComponent.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  ing: PropTypes.array,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func,
  onEditClick: PropTypes.func,
  display: PropTypes.string,
  price: PropTypes.string,
  onItemClick: PropTypes.func,
  className: PropTypes.string,
  onPlusBtnClick: PropTypes.func,
  icon: PropTypes.object,
};

export default CardComponent;
