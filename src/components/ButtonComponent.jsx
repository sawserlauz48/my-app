import { Fragment } from "react";
const ButtonComponent = ({ label }) => {
  return (
    <Fragment>
      <button className="mt-2 w-full ">{label}</button>
    </Fragment>
  );
};
export default ButtonComponent;
