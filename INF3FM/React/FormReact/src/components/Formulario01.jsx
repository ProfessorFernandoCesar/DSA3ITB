import React from "react";
import { useState } from "react";

const Formulario01 = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const handleNome = (e) => {
    console.log(e.target.value);
    setNome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome do Usuário : ",nome);
    console.log("E-mail : ",email)
  }
  return (
    <div>
      <h3>Formulario01</h3>
      <form onSubmit={handleSubmit}>
        {/* 1ª forma */}
        <label htmlFor="nome">Nome :</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome"
          onChange={handleNome}
        />
        {/* 2ª forma */}
        <label>
          <span>E-mail :</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar ..." />
      </form>
    </div>
  );
};

export default Formulario01;
