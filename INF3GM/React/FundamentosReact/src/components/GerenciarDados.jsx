import React from 'react'
import { useState } from 'react'

const GerenciarDados = () => {
    let numero01 = 10

    const [numero02,setNumero02] = useState(20)

  return (
    <>
    <div>GerenciarDados</div>
    <p>Valor de numero01 : {numero01}</p>
    <button onClick={()=>{
        numero01 = numero01 + 1 
        console.log("Valor de numero01 : "+numero01)
    }}>Mudar numero01</button>

    <p>valor de numero02 : {numero02}</p>
    <button  onClick={()=> setNumero02(numero02 + 1)}  >Mudar o numero02</button>

    



    </>
    
  )
}

export default GerenciarDados