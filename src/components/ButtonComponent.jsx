import { Fragment } from "react";
const ButtonComponent = ({ label }) => {
  return (
    <button
      type="button"
      className="focus:outline-none text-white bg-lightmode-pBtn hover:bg-yellow-500 focus:ring-4 focus:ring-lightmode-accent font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900"
    >
      Yellow
    </button>
  );
};
export default ButtonComponent;
