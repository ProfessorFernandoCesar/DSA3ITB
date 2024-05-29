import React from "react";
import { useState } from "react";

const Eventos = () => {
  let numero01 = 10;

   const [numero02, setNumero02 ] = useState(20)


  return (
    <>
      <div>Eventos</div>
      <p>Valor de numero01 : {numero01}</p>

      <button onClick={
        ()=>{
        numero01 = numero01 + 1
        console.log("numero01 = "+numero01)
      }
      }>Alterar numero01</button>

      <p>Valor de numero02 : {numero02} </p>
      <button onClick={
        ()=> { setNumero02(numero02+1)}
      }>Alterar numero02</button>

    </>
  );
};

export default Eventos;
