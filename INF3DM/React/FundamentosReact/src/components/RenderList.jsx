import React from "react";
import { useState } from "react";

const RenderList = () => {
  const [listaNome, setListaNomes] = useState(["Pedro", "Mateus", "João"]);

  return (
    <>
      <div>RenderList</div>
      <p>Lista de Nomes</p>
      <ul>
        {listaNome.map((valor, indice) => (
          <li key={indice}>{valor}</li>
        ))}
      </ul>
    </>
  );
};

export default RenderList;
