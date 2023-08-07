const CheckboxComponent = ({ title, label, onClick, state }) => {
  const handleClick = (event) => {
    onClick(event);
  };

  return (
    <div className="flex items-center mr-4 mt-4">
      <input
        checked={state[title]}
        type="checkbox"
        id={title}
        onClick={handleClick}
      />
      <label htmlFor={title}>{label}</label>
    </div>
  );
};

export default CheckboxComponent;
