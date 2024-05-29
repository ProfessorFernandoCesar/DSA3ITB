// rafce
import React from "react";
import { useState } from "react";

const Formulario01 = ({ usuario }) => {
  const [nome, setNome] = useState(usuario ? usuario.nome : "");
  const [email, setEmail] = useState(usuario ? usuario.email : "");
  const [descricao, setDescricao] = useState(usuario ? usuario.descricao : "");
  const [perfil, setPerfil] = useState(usuario ? usuario.perfil : "");

  const handleNome = (e) => {
    console.log(e.target.value);
    setNome(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome : ", nome);
    console.log("E-mail :", email);
    console.log("Descrição : ", descricao);
    console.log("Perfil : ", perfil);
    console.log("Formulário enviado ...");
  };

  return (
    <div className="container">
      <h2 className="mt-5 mb-5"> Formulario01 </h2>
      <form onSubmit={handleSubmit}>
        {/* 1ª forma de obter */}

        <div className="form-group  mb-3">
          <label htmlFor="nome" className="form-label">
            Nome :
          </label>
          <input
            className="form-control"
            type="text"
            name="nome"
            placeholder="Digite o nome"
            onChange={handleNome}
            value={nome}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Digite o Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* 2ª forma 
        <label>
          <span>E-mail :</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label> */}

        {/* textarea descrição */}
        <div className="form-group mb-3">
          <label htmlFor="descricao" className="form-label">
            Descrição :
          </label>
          <textarea
            name="descricao"
            className="form-control"
            placeholder="Informe a Descrição"
            onChange={(e) => setDescricao(e.target.value)}
            value = {descricao}
          ></textarea>
        </div>

        {/* Opçoes / select */}
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
              Escolha uma Opção
            </option>
            <option value="usuário">Usuário</option>
            <option value="editor">Editor</option>
            <option value="administrador">Administrador</option>
          </select>
        </div>

        <input type="submit" value="Enviar" className="btn btn-primary " />
      </form>
    </div>
  );
};

export default Formulario01;
