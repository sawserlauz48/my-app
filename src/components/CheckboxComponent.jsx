import { useEffect } from "react";
import { useState } from "react";

const CheckboxComponent = ({ title, id, label, ifChecked }) => {
  const [isChecked, setCheckboxState] = useState(true);

  useEffect(() => {
    setCheckboxState(ifChecked);
  }, []);

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
