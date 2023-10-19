import React from "react";
import "./input.scss";
const Input = ({ logo, name, ...rest }) => {
  return (
    <div className="input">
      <label htmlFor={name}>{logo}</label>
      <input type="text" {...rest} name={name} />
    </div>
  );
};

export default Input;
