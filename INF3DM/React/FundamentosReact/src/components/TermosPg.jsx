import React from "react";
import { useState } from "react";

const TermosPg = () => {

  let razaoPG = 3;
  let primeiroTermo = 2;
  
  const [termoPG, setTermoPG] = useState(primeiroTermo);
  
  
  return (
    <div>
      <h2>Termos da Progressão Geométrica - PG</h2>
      <h3>Razão : {razaoPG}</h3>
      <h3>Primeiro Termo : {primeiroTermo} </h3>
      <h3>Termo : {termoPG}</h3>
      <p></p>
      <button onClick={()=> ( setTermoPG(termoPG*razaoPG))}>Próximo Termo</button>
    </div>
  );
};

export default TermosPg;
