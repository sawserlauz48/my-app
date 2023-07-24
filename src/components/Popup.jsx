import React from "react";

function Popup(props) {
  return props.trigger ? (
    <div>
      <div>image</div>
      <div>disc</div>
      price
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default Popup;
