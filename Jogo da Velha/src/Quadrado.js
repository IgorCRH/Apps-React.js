import React from 'react';

export const Quadrado = ({value, onClick}) => {
    const estilo = value === "X" ? "quadrado X" : "quadrado O"
    return (
        <button className={estilo} onClick={onClick}>{value}</button>
    )
}