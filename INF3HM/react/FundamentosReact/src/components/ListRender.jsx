import React from "react";
import { useState } from "react";

const ListRender = () => {
  const [usuarios] = useState([
    { id: 1, nome: "Fernando", idade: 54 },
    { id: 2, nome: "Pedro", idade: 33 },
    { id: 3, nome: "Maria", idade: 23 },
  ]);

  return (
    <>
      <div>
        <h2>Renderização de Lista </h2>
      </div>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nome} - idade : {usuario.idade}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListRender;
