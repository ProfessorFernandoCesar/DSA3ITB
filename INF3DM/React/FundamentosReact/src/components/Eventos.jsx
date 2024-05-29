import React from 'react'

const tratarMeuClique = () => {
    console.log("Meu clique foi clicado !!!")
}



const Eventos = () => {
  return (
    <>
    
    <div>
        <h2>Eventos</h2>
    </div>
    <button  onClick={tratarMeuClique} >Clique aqui !!! </button>

    <button onClick={()=> console.log("Cliquei no aqui também")}>Clique aqui também !!!</button>
    
    
    
    </>
   
  )
}

export default Eventos