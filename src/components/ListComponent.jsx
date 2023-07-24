import PropTypes from "prop-types";

const Listcomponent = ({
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
      className="relative overflow-x-auto sm:rounded-lg shadow-lg bg-lightmode-bg border-lightmode-pBtn hover:bg-orange-200 dark:bg-darkmode-accent  dark:border-blue-900 dark:hover:bg-blue-900"
    >
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
            <td className="px-6 py-4 text-slate-900 dark:text-slate-300">
              {price}₪
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
