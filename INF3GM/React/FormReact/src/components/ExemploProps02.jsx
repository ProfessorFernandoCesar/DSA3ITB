// rafce

import React from "react";

const ExemploProps02 = ({ marca, modelo, anoFabricacao }) => {
  return (
    <div>
      <h1>ExemploProps02</h1>
      <h2>Detalhes do Carro</h2>
      <ul>
        <li>Marca : {marca}</li>
        <li>Modelo : {modelo}</li>
        <li>Ano Fabricação : {anoFabricacao}</li>
      </ul>
    </div>
  );
};

export default ExemploProps02;
