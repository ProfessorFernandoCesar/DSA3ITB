import React from "react";

const handleMeuClique = () => {
  console.log("Cliquei em handleMeuClique");
};

const Eventos = () => {
  return (
    <>
      <div>Eventos</div>
      <button onClick={handleMeuClique()}>Clique aqui !!!</button>

    <button onClick={()=> console.log("cliquei no aqui também")}>Clique aqui também</button> 

    <button onClick={()=> {
        console.log("cliquei no aqui também ")
        console.log("======")
    }}>Clique outra vez aqui</button>
    </>
  );
};

export default Eventos;
