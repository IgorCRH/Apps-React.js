// App.js
import React, { useState } from "react";
import "./App.css";
import * as math from "mathjs";
import BotoesCalculadora from "./BotoesCalculadora";
import Input from "./Input";

function App() {
  const [modo, setarModo] = useState("radiano");
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const resultado = math.evaluate(input);
        setInput(String(resultado));
      } catch (error) {
        setInput("Erro");
      }
    } else if (value === "AC") {
      setInput("");
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const toggleMode = () => {
    setarModo((prevMode) => (prevMode === "radiano" ? "grau" : "radiano"));
  };

  const calculateFactorial = () => {
    try {
      const resultado = math.factorial(Number(input));
      setInput(String(resultado));
    } catch (error) {
      setInput("Erro");
    }
  };

  return (
    <>
      <div className="App">
        <h1>Calculadora Científica</h1>
        <Input
          value={input}
          onModeToggle={toggleMode}
          onFactorialClick={calculateFactorial}
        />
        <p className="ajudatoggle">Toggle Mode é usado para alternar entre radiano e grau para funções trigonométricas.</p>
        <p className="ajudatrig">Para as trigonométricas é necessário clicar no botão desejado e incluir o valor entre parênteses: trig (x)</p>
        <BotoesCalculadora onButtonClick={handleButtonClick} />
      </div>
    </>
  );
}

export default App;
