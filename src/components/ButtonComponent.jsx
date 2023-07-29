const ButtonComponent = ({ label, onclick, isDisable }) => {
  const handleSignInBtn = (event) => {
    onclick(event);
  };
  return (
    <button
      type="button"
      onClick={handleSignInBtn}
      disabled={isDisable}
      className="focus:outline-none text-white bg-lightmode-pBtn hover:bg-orange-300 dark:hover:bg-orange-300 dark:hover:text-slate-900 focus:ring-4 focus:ring-lightmode-accent font-medium w-full text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-orange-900"
    >
      {label}
    </button>
  );
};
export default ButtonComponent;
