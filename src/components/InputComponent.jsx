import { Fragment } from "react";

const InputComponent = () => {
  return (
    <Fragment>
      <label
        htmlFor="first-name"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        First name
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        />
      </div>
    </Fragment>
  );
};

export default InputComponent;
