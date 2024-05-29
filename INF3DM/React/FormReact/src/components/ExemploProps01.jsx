// Utilizar RAFCE para a estrutura base do componente

import React from "react";

const ExemploProps01 = (props) => {
  return (
    <div>
      <h1>ExemploProps01</h1>
      <h2>nome do usuário</h2>
      <h3>nome : {props.nome}</h3>
    </div>
  );
};

export default ExemploProps01;
