// Rafce

import React from "react";
import { useState } from "react";

const Formulário01 = ({usuario}) => {
  // criando as "variáveis" dos campos do formulário
  const [nome, setNome] = useState( usuario ? usuario.nome : "");
  const [email, setEmail] = useState(usuario ? usuario.email :"");
  const [descricao, setDescricao] = useState(usuario ? usuario.descricao : "");
  const [perfil, setPerfil] = useState(usuario ? usuario.perfil : "");

  const handleNome = (e) => {
    console.log(e.target.value);
    setNome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome : ", nome);
    console.log("E-mail : ", email);
    console.log("Descrição : ", descricao);
    console.log("Perfil : ",perfil)
    console.log("Formulário enviado com sucesso !!!");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="mt-4 mb-4">Cadastro de Usuário</h2>
        </div>

        {/* 1ª forma */}
        <div className="form-group mb-3">
          <label htmlFor="nome" className="form-label">
            Nome :{" "}
          </label>
          <input
            className="form-control"
            type="text"
            name="nome"
            placeholder="Digite o nome"
            onChange={handleNome}
            value = {nome}
          />
        </div>

        {/* 2ª forma */}
        <div className="form-group mb-3">
          <label className="form-label">E-mail :</label>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Digite o E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value = {email}
          />
        </div>

        {/* textarea Descricao */}
        <div className="form-group mb-3">
          <label htmlFor="descricao" className="form-label">
            Descrição :
          </label>
          <textarea
            name="descricao"
            className="form-control"
            placeholder="Informe a descrição do usuário"
            onChange={(e) => setDescricao(e.target.value)}
            value = {descricao}
          ></textarea>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="perfil" className="form-label">
            Perfil :
          </label>
          <select
            name="perfil"
            className="form-control"
            onChange={(e) => setPerfil(e.target.value)}
            value={perfil}
          >
            <option disabled selected value="">
              Escolha uma opção
            </option>
            <option value="usuário">Usuário</option>
            <option value="editor">Editor</option>
            <option value="adninistrador">Administrador</option>
          </select>
        </div>

        <input type="submit" value="Enviar" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default Formulário01;
