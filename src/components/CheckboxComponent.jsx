import { Fragment } from "react";

const CheckboxComponent = ({ name, id }) => {
  return (
    <div class="flex items-center mr-4 mt-4">
      <input
        id="orange-checkbox"
        type="checkbox"
        value=""
        class="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlForfor="orange-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Orange
      </label>
    </div>
  );
};

export default CheckboxComponent;
