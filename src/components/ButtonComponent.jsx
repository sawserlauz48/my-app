const ButtonComponent = ({ className, label, onClick, isDisable, icon }) => {
  const handleSignInBtn = (event) => {
    onClick(event);
  };
  return (
    <button
      id={label}
      type="button"
      onClick={handleSignInBtn}
      disabled={isDisable}
      className={` focus:outline-none text-white bg-lightmode-pBtn hover:bg-orange-300 dark:hover:bg-orange-300 dark:hover:text-slate-900 focus:ring-4 focus:ring-lightmode-accent font-medium text-sm dark:focus:ring-orange-900 ${className} `}
    >
      {label}
      {icon}
    </button>
  );
};
export default ButtonComponent;
