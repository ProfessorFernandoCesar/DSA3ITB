// RAFCE

import React from "react";
import { useState } from "react";

const Formulario01 = ({ user }) => {
  // Criando os useState ( "Variáveis")
  const [nome, setNome] = useState(user ? user.nome : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [descricao, setDescricao] = useState(user ? user.descricao : "");
  const [perfil, setPerfil] = useState(user ? user.perfil : "");

  const handleNome = (e) => {
    console.log(e.target.value);
    setNome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome : ", nome);
    console.log("E-mail : ", email);
    console.log("Descrição : ", descricao);
    console.log("Perfil : ", perfil);
    console.log("Formulário enviado ...");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="mt-5 mb-4">Formulario01</h2>
        </div>

        <div className="form-group">
          {/* 1ª maneira de obter o dado */}
          <label htmlFor="nome" className="form-label">
            Nome :
          </label>
          <input
            className="form-control mb-3"
            type="text"
            name="nome"
            placeholder="Digite o nome"
            onChange={handleNome}
            value={nome}
          />
        </div>

        {/* 2ª maneira
        <div className="form-group">
        <label >
          <span className="form-label">E-mail : </span>
          <input
          className="form-control"
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        </div> */}

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-mail :
          </label>
          <input
            className="form-control mb-3"
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao" className="form-label">
            Descrição :
          </label>
          <textarea
            name="descricao"
            className="form-control mb-3"
            placeholder="Informe a descrição"
            onChange={(e) => setDescricao(e.target.value)}
            value={descricao}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="perfil" className="form-label">
            Perfil :
          </label>
          <select
            name="perfil"
            className="form-control"
            onChange={(e) => setPerfil(e.target.value)}
            value  = {perfil}
          >
            <option disabled selected value="">
              Escolha uma opção
            </option>
            <option value="usuário">Usuário</option>
            <option value="editor">Editor</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>

        <div>
          <input type="submit" value="Enviar" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default Formulario01;
