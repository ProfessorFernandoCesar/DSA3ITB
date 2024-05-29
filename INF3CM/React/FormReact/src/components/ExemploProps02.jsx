import React from 'react'

const ExemploProps02 = ({marca,modelo,anoFabricacao}) => {
  return (
    <div>
        <h2>ExemploProps02</h2>
        <h2>Detalhe do Carro</h2>
        <ul>
            <li>Marca : {marca}</li>
            <li>Modelo : {modelo}</li>
            <li>Ano : {anoFabricacao}</li>
        </ul>
        
        </div>
  )
}

export default ExemploProps02