import React from "react";
import { useState } from "react";

const Formulario01 = () => {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");

  const handleNomeUsuario = (e) => {
    console.log(e.target.value);
    setNomeUsuario(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome : ", nomeUsuario);
    console.log("E-mail : ", emailUsuario);
  };

  return (
    <>
      <h1>Formulario01</h1>
      <form onSubmit={handleSubmit}>
        {/* 1ª forma */}
        <label htmlFor="nomeUsuario">Nome :</label>
        <div>
          <input
            type="text"
            name="nomeUsuario"
            placeholder="Digite o nome do usuário"
            onChange={handleNomeUsuario}
          />
        </div>

        {/* 2ª forma */}
        <label>
          <div>
            <span>E-mail :</span>
          </div>
          <div>
            <input
              type="email"
              name="emailUsuario"
              placeholder="Digite o e-mail"
              onChange={(e) => setEmailUsuario(e.target.value)}
            />
          </div>
        </label>

        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </>
  );
};

export default Formulario01;
