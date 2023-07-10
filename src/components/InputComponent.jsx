const InputComponent = ({ placeholder }) => {
  return (
    <div className="inputDiv relative flex flex-col mt-2">
      <input
        className=" inputInput h-8 dark:text-lightmode-text p-2 rounded-sm placeholder:text-slate-500 mb-4"
        type="text"
        name="first-name"
        id="first-name"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComponent;
