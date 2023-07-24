const CheckboxComponent = ({ name, id, label, checkboxState }) => {
  return (
    <div className="flex items-center mr-4 mt-4">
      <input checked={checkboxState} type="checkbox" id={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckboxComponent;
