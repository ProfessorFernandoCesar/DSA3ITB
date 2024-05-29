import React from "react";
import { useState } from "react";

const GerenciarDados = () => {
  let numero01 = 10;

  const [numero02, setNumero02] = useState(20);

  return (
    <>
      <div>GerenciarDados</div>

      <p>Valor numero01 : {numero01} </p>
      <button onClick={() => (numero01 = 15)}>Mudar a variável numero01</button>
      <p>Valor numero02 : {numero02} </p>
      <button onClick={() => setNumero02(35)}>Mudar a variável numero02</button>
    </>
  );
};

export default GerenciarDados;
