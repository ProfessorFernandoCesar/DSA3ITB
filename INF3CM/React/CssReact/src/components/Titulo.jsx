import React from 'react'
import styles from "./Titulo.module.css"
const Titulo = () => {
  return (
    <div className={styles.minhaBorda}>
        <h1>Título no Componente com formatação global</h1>
        <h1 className={styles.h1Titulo}>Título com formatação do módulo</h1>
        <h1 className={styles.h1Titulo}>1</h1>
        <h1 className={styles.h1Titulo}>2</h1>
    </div>
  )
}

export default Titulo