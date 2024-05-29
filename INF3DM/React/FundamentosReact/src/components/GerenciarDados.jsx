import React from 'react'
import { useState } from 'react'

const GerenciarDados = () => {

    let numero01 = 10 

    const [numero02 , setNumero02] = useState(20)


  return (
    <>
    <div>GerenciarDados</div>
    <p>Valor de numero01 : {numero01} </p>
    <button onClick={()=>{
        numero01 = 15
        console.log(numero01)
    }}>Mudar a valor de numero01</button>
    <p>Valor de numero02 : {numero02}</p>
    <button   onClick={() => setNumero02(numero02+1)} >Mudar o valor de numero02</button>

    </>
    
  )
}

export default GerenciarDados