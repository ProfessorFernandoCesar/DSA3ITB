import React from "react";

const handleMeuClique = () => {
  console.log("Cliquei em handle Meu Clique");
};

const Eventos = () => {
  return (
    <>
      <div>Eventos</div>
      <button onClick={handleMeuClique}>Clique Aqui</button>

      <button onClick={() => console.log("Cliquei no também aqui")}>
        Clique aqui também
      </button>
      <button
        onClick={() => {
          console.log("==========");
          console.log("Cliquei aqui de novo");
        }}
      >
        Clique aqui de novo
      </button>
    </>
  );
};

export default Eventos;
