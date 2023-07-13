const InputComponent = ({ id, label, name, type, isRiq }) => {
  return (
    <div className="relative z-0 mt-5">
      <input
        required={isRiq}
        type={type}
        id={id}
        className="block py-2.5 px-0 w-full text-sm text-lightmode-text bg-transparent border-0 border-b-2 border-lightmode-pBtn appearance-none dark:text-darkmode-text dark:border-blue-900 dark:focus:border-blue-900 focus:outline-none focus:ring-0 focus:border-lightmode-pBtn peer"
        placeholder={" "}
      />
      <label
        htmlFor={id}
        className="absolute text-sm text-lightmode-text dark:text-darkmode-text duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-lightmode-pBtn peer-focus:dark:text-darkmode-pBtn peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  );
};

export default InputComponent;
