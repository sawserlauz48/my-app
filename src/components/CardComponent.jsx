const CardComponent = () => {
  return (
    <div className="custom m-3 rounded-md">
      <div className="grid grid-cols-3  rounded-md">
        <div className="col-span 1">asdasdasd</div>
        <div className="grid grid-cols-1 col-span-2">
          <div>title:iskander kebab</div>
          <div>discription: kebab with bread</div>
          <div>price:70₪</div>
          <button>buy</button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
