import React from "react";

const tratarMeuClique = () => {
  console.log("cliquei no tratar meu clique ...");
};

const Eventos = () => {
  return (
    <>
      <div>Eventos</div>
      <button onClick={tratarMeuClique}>Clique aqui !!!</button>
      <button onClick={()=> console.log("Aqui também")}>Clique aqui também</button>
      <button onClick={()=>{
        console.log("=============")
        console.log("cliquei no aqui também")
      }}>Clique novamente aqui</button>
    </>
  );
};

export default Eventos;
