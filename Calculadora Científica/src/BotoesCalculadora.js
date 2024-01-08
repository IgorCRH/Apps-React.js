// CalculatorButtons.js
import React from "react";

const BotoesCalculadora = ({ onButtonClick }) => {
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "sin", "cos", "tan", "sqrt",
    "(", ")", "AC"
  ];

  return (
    <div className="calculator-buttons">
      {buttons.map((button, index) => (
        <button key={index} onClick={() => onButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default BotoesCalculadora;
