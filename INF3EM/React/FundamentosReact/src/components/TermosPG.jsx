import React from 'react'
import { useState } from 'react';

const TermosPG = () => {
    let razao = 3;
    let primeiroTermo = 2 ;
    const [termo,setTermo] = useState(primeiroTermo);
  return (
    <div>
       <h2>Termos da PG</h2>
       <h3>Razão : {razao}</h3>
       <h3>Primeiro Termo : {primeiroTermo}</h3>
       <h3>Termo atual : {termo}</h3>
       <button onClick={()=> setTermo(termo*razao)}>Próximo Termo</button>
    </div>
  )
}

export default TermosPG