// Input.js
import React from "react";

const Input = ({ value, onModeToggle, onFactorialClick }) => {
  return (
    <div className="calculator-input">
      <input value={value} readOnly />
      <div className="input-buttons">
        <button onClick={onModeToggle}>Toggle Mode</button>
        <button onClick={() => onFactorialClick()}>!</button>
      </div>
    </div>
  );
};

export default Input;