import React from "react";
import "./button.scss";
const Button = ({ name, ...rest }) => {
  return (
    <div className="butt">
      <button {...rest}>{name}</button>
    </div>
  );
};

export default Button;
