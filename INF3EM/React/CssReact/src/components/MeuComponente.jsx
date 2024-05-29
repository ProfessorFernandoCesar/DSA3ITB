import React from 'react'
import "./MeuComponente.css"
const MeuComponente = () => {
  return (
    <div>
        <h1>CSS de Componente</h1>
        <p>Este parágrafo é do Meu Componente</p>
        <p className='paragrafoMeuComponente'>Este é um parágrafo com o estilo do componente</p>
    </div>
  )
}

export default MeuComponente