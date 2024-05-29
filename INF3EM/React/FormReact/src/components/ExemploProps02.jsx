import React from "react";

const ExemploProps02 = ({ idUsuario, nomeUsuario, perfilUsuario }) => {
  return (
    <>
      <div>ExemploProps02</div>
      <h1>Dados do Usuário</h1>
      <ul>
        <li>id : {idUsuario}</li>
        <li>nome : {nomeUsuario}</li>
        <li>perfilUsuario : {perfilUsuario}</li>
      </ul>
    </>
  );
};

export default ExemploProps02;
