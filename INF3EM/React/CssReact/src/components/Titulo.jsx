import React from "react";

import styles from "./Titulo.module.css"


const Titulo = () => {
  return (
    <div>
      <h1>Componente Título</h1>
      <h1 className={styles.meuTitulo}>Com o estilo </h1>
    </div>
  );
};

export default Titulo;
