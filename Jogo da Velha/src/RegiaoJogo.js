import React from 'react';
import { Quadrado } from './Quadrado.js';
import './RegiaoJogo.css';

export const RegiaoJogo = ({regiao, onClick}) => {
    return (
        <div className="AreadoJogo">
            {regiao.map((value, index) => {
                return <Quadrado value={value} onClick={() => value === null && onClick(index)}></Quadrado>
            })}
        </div>    
    )
}