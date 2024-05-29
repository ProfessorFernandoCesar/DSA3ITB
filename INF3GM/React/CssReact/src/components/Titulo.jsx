import React from "react";

import styles from "./Titulo.module.css"
export const Titulo = () => {
  return (
    <div>
      <h1 className="meuTitulo"> Estou no Título com CSS do index</h1>
      <h1 className={styles.meuTitulo}>Estou no Título com CSS do Titulo Module CSS</h1>
    </div>
  );
};
