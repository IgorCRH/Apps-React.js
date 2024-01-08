import './App.css';
import React, { useState } from 'react';
import { RegiaoJogo } from './RegiaoJogo';
import { Placar } from './Placar';

function App() {
  const [regiao, setarRegiao] = useState(Array(9).fill(null));
  const [jogadorX, setarjogadorX] = useState(true);
  const [placar, setarPlacar] = useState({ placarX: 0, placarO: 0 });
  const [jogoVencido, setarJogoVencido] = useState(false);

  const condicoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ];

  const handleQuadradoClick = (quadradoIndex) => {
    const atualizarRegiao = regiao.map((value, index) => {
      if (index === quadradoIndex) {
        return jogadorX ? "X" : "O";
      } else {
        return value;
      }
    });

    const vencedor = checarVencedor(atualizarRegiao);

    if (vencedor) {
      alert(`Jogador ${vencedor} venceu!`);
      atualizarPlacar(vencedor);
    }

    setarRegiao(atualizarRegiao);
    setarjogadorX(!jogadorX);
  };

  const checarVencedor = (regiao) => {
    for (let i = 0; i < condicoesVitoria.length; i++) {
      const [x, y, z] = condicoesVitoria[i];

      if (regiao[x] && regiao[x] === regiao[y] && regiao[y] === regiao[z] && regiao[z]) {
        setarJogoVencido(true);
        return regiao[x];
      }
    }
    return null;
  };

  const atualizarPlacar = (vencedor) => {
    if (vencedor === "X") {
      setarPlacar((prevPlacar) => ({ ...prevPlacar, placarX: prevPlacar.placarX + 1 }));
    } else {
      setarPlacar((prevPlacar) => ({ ...prevPlacar, placarO: prevPlacar.placarO + 1 }));
    }
  };

  const resetarJogo = () => {
    setarRegiao(Array(9).fill(null));
    setarJogoVencido(false); // Reseta o estado do jogo
  };

  return (
    <div className="App">
      <Placar placar={placar} />
      <RegiaoJogo regiao={regiao} onClick={handleQuadradoClick} />
      {jogoVencido}
      <button className="reset" onClick={resetarJogo}>Resetar Jogo</button>
    </div>
  );
}

export default App;