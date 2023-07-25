import { useState } from "react";

const CheckboxComponent = ({ title, id, label }) => {
  const [isChecked, setCheckboxState] = useState(true);

  const handleChange = (event) => {
    setCheckboxState(event.target.checked);
  };
  return (
    <div className="flex items-center mr-4 mt-4">
      <input
        checked={isChecked}
        type="checkbox"
        id={title}
        onChange={handleChange}
      />
      <label htmlFor={title}>{label}</label>
    </div>
  );
};

export default CheckboxComponent;
