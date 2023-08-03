const AlertComponent = ({ inputsErrorsState, name, onChange }) => {
  const handleChange = (event) => {
    onChange(event);
  };
  return (
    <div>
      {inputsErrorsState && inputsErrorsState[name] && (
        <div>
          <div
            onChange={handleChange}
            className="flex flex-col items-center p-4 mb-4 text-sm text-yellow-800 rounded-b-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
            role="alert"
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 mr-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            {inputsErrorsState[name].map((item) => (
              <div className="flex flex-col" key={`${name}` + "-errors" + item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertComponent;
