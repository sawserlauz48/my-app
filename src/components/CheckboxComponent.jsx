import { Fragment } from "react";

const CheckboxComponent = ({ name, id }) => {
  return (
    <div className="flex">
      <input className=" self-center" type="checkbox" name={name} id={id} />
      <label className="ml-2" htmlFor={id}>
        {name}
      </label>
    </div>
  );
};

export default CheckboxComponent;
