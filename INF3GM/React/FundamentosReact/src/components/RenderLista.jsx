import React from "react";
import { useState } from "react";

const RenderLista = () => {
  const [listaNomes] = useState(["Pedro", "Maria", "José", "Paulo"]);

  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: "Miguel", idade: 15 },
    { id: 2, nome: "Gabriel", idade: 18 },
    { id: 3, nome: "Rafael", idade: 25 },
  ]);

  const excluirUsuarioAletatorio = () => {
    // obter o id aleatório
    let usuarioQualquer = Math.floor(Math.random() * 4);
    console.log(usuarioQualquer);
    setUsuarios((valorPrevio) => {
      let retorno = valorPrevio.filter(
        (usuario) => usuario.id != usuarioQualquer
      );
      return retorno;
    });
  };

  return (
    <>
      <div>RenderLista</div>
      <p>Lista de Nomes</p>
      <ul>
        {listaNomes.map((item, indice) => (
          <li key={indice}>{item}</li>
        ))}
      </ul>
      <p>Lista de Usuários</p>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} - idade : {usuario.idade}
          </li>
        ))}
      </ul>
      <button onClick={excluirUsuarioAletatorio}>
        Excluir Usuario Aleatório
      </button>
    </>
  );
};

export default RenderLista;
