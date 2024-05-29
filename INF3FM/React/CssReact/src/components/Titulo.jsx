import React from 'react'
import styles from './Titulo.module.css'



const Titulo = () => {
  return (
    <div>
        <h1>Título do Componente</h1>
        <h1 className= {styles.meuTitulo}>Titulo com .meuTitulo</h1>
        
        </div>
  )
}

export default Titulo