import { useEffect } from "react";
import { useState } from "react";

const CheckboxComponent = ({
  title,
  id,
  label,
  ifChecked,
  isCheckedState,
  onChange,
}) => {
  const [isChecked, setCheckboxState] = useState(true);

  // const onChange = (event) => {
  //   setCheckboxState(event.target.checked);
  // };
  const handleChange = (event) => {
    onChange(event);
  };
  return (
    <div className="flex items-center mr-4 mt-4">
      <input
        checked={isCheckedState}
        type="checkbox"
        id={title}
        onChange={handleChange}
      />
      <label htmlFor={title}>{label}</label>
    </div>
  );
};

export default CheckboxComponent;
