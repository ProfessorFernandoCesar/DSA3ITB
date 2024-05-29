// Usar o RAFCE para criar e estrutura base do componente

import React from "react";

const ExemploProps01 = (props) => {
  return (
    <div>
      <h1>ExemploProps01</h1>
      <h3>Nome do Usuário : {props.nome}</h3>
    </div>
  );
};

export default ExemploProps01;
