import React from "react";

const ClasseDinamica = () => {
  let tipoMensagem = 'erro';
   tipoMensagem = "warning";

  if (tipoMensagem != 'erro'){
    console.log("=erro")
  } else {
    console.log("!=erro")
  }

  

  return (
    <>
      <div>ClasseDinamica</div>
      <p  className= { tipoMensagem === 'erro' ? "error" : "warning"}>Esta é uma mensagem de {tipoMensagem} </p>
      <p  className= { tipoMensagem != 'erro' ? "warning" : "error"}>Esta ---- é uma mensagem de {tipoMensagem} </p>

    </>
  );
};

export default ClasseDinamica;
