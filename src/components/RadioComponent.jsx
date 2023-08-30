const RadioComponent = ({ className, label, onClick, isDisable, icon }) => {
  const handleRadioBtnClick = (event) => {
    onClick(event);
  };
  return (
    <div>
      <input type="radio" id={label} name="age" value="30" />
      <label for={label} onClick={handleRadioBtnClick}>
        {label}
      </label>
    </div>
  );
};
export default RadioComponent;
