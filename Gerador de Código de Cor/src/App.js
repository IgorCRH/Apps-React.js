import './App.css';
import { SketchPicker } from 'react-color';
import { useState } from "react";

function App() {

  const [corAtual, setarcorAtual] = useState("#000")
  const definirOnChange = (color) => {
    setarcorAtual(color.hex)
  }
  const estiloApp = {
    color: "#ffffff",
    backgroundColor: corAtual,
  }
  return (
    <div className="App" style={estiloApp}>
      <header className="Gerador Conta-Gotas de Cor">
      </header>
      <h1>Gerador Conta-Gotas de Cor</h1>
      <SketchPicker color={corAtual} onChangeComplete = {definirOnChange}></SketchPicker>
    </div>
  );
}

export default App;
