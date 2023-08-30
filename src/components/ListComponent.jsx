import PropTypes from "prop-types";
import ButtonComponent from "./ButtonComponent";
import { buyIcon, close, editIcon } from "../images/svgs";
import { useSelector } from "react-redux";

const Listcomponent = ({
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
}) => {
  const isAdmin = useSelector((bigPie) => bigPie.adminAuthSlice.isAdmin);
  const onBtnClick = () => {
    onPlusBtnClick(id, ing, image, title, price);
  };
  const handleItemClick = () => {
    onItemClick(id);
  };
  const handleDivClick = (event) => {
    event.stopPropagation();
  };
  const handleEditBtn = () => {
    onEditClick(id);
  };
  return (
    <div
      onClick={handleItemClick}
      className=" mt-4 relative sm:rounded-lg shadow-lg bg-lightmode-bg border-lightmode-pBtn hover:bg-orange-200 dark:bg-darkmode-accent  dark:border-blue-900 dark:hover:bg-blue-900"
    >
      {isAdmin ? (
        <div className={display}>
          <button
            // onClick={handleDeleteBtn}
            className="bg-red-500 rounded-[50%] p-[5px] border-[3px] hover:bg-red-400 absolute top-[-15px] right-[4px] w-8 h-8 flex justify-center items-center
        "
          >
            {close}
          </button>
          <button
            onClick={handleEditBtn}
            className="bg-green-500 rounded-[50%] p-[5px] border-[3px] hover:bg-green-400 absolute top-[-15px] right-[40px] w-8 h-8 flex justify-center items-center
        "
          >
            {editIcon}
          </button>
        </div>
      ) : (
        ""
      )}
      <table className="h-full w-full text-sm text-left text-lightmode-text dark:text-darkmode-text">
        <tbody>
          <tr className="w-full border dark:border-r-[0.1px] dark:border-slate-700 border-r-[0.1px] border-slate-50">
            <td className="tdImage p-4 ">
              <img className="rounded-md" src={image} alt={name} />
            </td>
            <td className="tdTitle font-bold text-lg px-6 py-4 text-gray-900 dark:text-white">
              {name}
            </td>
            <td className="tdDescription px-6 py-4 text-slate-500 dark:text-slate-500">
              {description}
            </td>
            <td className={` px-6 py-4 text-slate-900 dark:text-slate-300`}>
              {price}
            </td>
            <td className="px-6 py-4 text-slate-900 dark:text-slate-300">
              <div onClick={handleDivClick}>
                <ButtonComponent
                  icon={icon}
                  className={
                    "h-[40px] w-[40px] flex justify-center items-center rounded-md mt-2"
                  }
                  onClick={onBtnClick}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Listcomponent.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // onDelete: PropTypes.func,
  onOpen: PropTypes.func,
  // canEdit: PropTypes.bool,
};

Listcomponent.defaultProps = {
  image:
    "https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail-300x225.jpg",
  alt: "",
  canEdit: false,
};

export default Listcomponent;
