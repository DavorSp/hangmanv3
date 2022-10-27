import React from "react";
import "./Button.css";

function Button({ value, handleClick, isDisabled }) {
  return (
    <div>
      <button className="" disabled={false} onClick={handleClick} value={value}>
        {value}
      </button>
    </div>
  );
}

export default Button;
