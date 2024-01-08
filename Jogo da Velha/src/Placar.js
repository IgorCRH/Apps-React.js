import React from 'react';
import './Placar.css';

export const Placar = ({ placar }) => {
  return (
    <div className="placar">
      <div>Jogador X: {placar.placarX}</div>
      <div>Jogador O: {placar.placarO}</div>
    </div>
  );
};
