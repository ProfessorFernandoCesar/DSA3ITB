import React from "react";
import { useState } from "react";

const RenderList = () => {
  const [listaNomes] = useState(["Pedro", "José", "Maria", "Paulo"]);

  const [usuarios] = useState([
    { id: 1, nome: "Gabriel", idade: 13 },
    { id: 2, nome: "Raphael", idade: 15 },
    { id: 3, nome: "Miguel", idade: 16 },
  ]);

  return (
    <>
      <div>RenderList</div>
      <p>Lista de Nomes</p>
      <ul>
        {listaNomes.map((item, indice) => (
          <li key={indice}>{item}</li>
        ))}
      </ul>
      <p>Lista de Usuários</p>
      <ul>
        {usuarios.map((item) => (
          <li key={item.id}>
            {item.nome} - idade : {item.idade}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RenderList;
