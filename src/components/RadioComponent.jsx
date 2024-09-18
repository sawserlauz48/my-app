const RadioComponent = ({ title, label, onClick, name }) => {
  const handleRadioBtnClick = (event) => {
    onClick(event);
  };
  return (
    <div>
      <input type="radio" id={title} name={name} />
      <label htmlFor={title} onClick={handleRadioBtnClick}>
        {label}
      </label>
    </div>
  );
};
export default RadioComponent;
