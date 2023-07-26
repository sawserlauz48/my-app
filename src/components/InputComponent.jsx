const InputComponent = ({
  id,
  label,
  isRiq,
  name,
  onChange,
  type,
  required,
  inputState,
  inputsErrorsState,
}) => {
  return (
    <div className="relative z-0 mt-5 w-full">
      <input
        required={required}
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
      <div>
        <div
          class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-b-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
          role="alert"
        >
          <svg
            class="flex-shrink-0 inline w-4 h-4 mr-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div>
            <span class="font-medium">Warning alert!</span> Change a few things
            up and try submitting again.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
