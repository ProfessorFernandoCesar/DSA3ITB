// rafce para estrutura base componente
import React from "react";
import { useState } from "react";

const Formulario01 = () => {
  //  Variáveis para campos do componente
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [descricaoUsuario, setDescricaoUsuario] = useState("");
  const [perfilUsuario, setPerfilUsuario] = useState("");

  const handleNomeUsuario = (e) => {
    console.log(e.target.value);
    setNomeUsuario(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome usuário : ", nomeUsuario);
    console.log("E-mail usuário : ", emailUsuario);
    console.log("Descrição : ", descricaoUsuario);
    console.log("Perfil : ", perfilUsuario);
    console.log("Formulário enviado com sucesso !!!");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h2 className="mt-5 mb-4">Cadastro de Usuário</h2>
          {/* 1ª forma  */}

          <div className="form-group mb-2">
            <label htmlFor="nomeUsuario" className="form-label">
              Nome :{" "}
            </label>
            <input
              className="form-control"
              type="text"
              name="nomeUsuario"
              placeholder="Digite o nome do usuário"
              onChange={handleNomeUsuario}
            />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="emailUsuario" className="form-label">
              E-mail :
            </label>
            <input
              className="form-control"
              type="email"
              name="emailUsuario"
              placeholder="Digite o e-mail"
              onChange={(e) => setEmailUsuario(e.target.value)}
            />
          </div>
          {/* TextArea */}
          <div className="form-group mb-2">
            <label htmlFor="descricaoUsuario" className="form-label">
              Descrição :
            </label>
            <textarea
              name="descricaoUsuario"
              className="form-control"
              placeholder="Informe a descrição"
              onChange={(e) => setDescricaoUsuario(e.target.value)}
            ></textarea>
          </div>

          {/* Lista de Opções / select  */}

          <div className="form-group mb-2">
            <label htmlFor="perfil" className="form-label">
              Perfil :{" "}
            </label>
            <select
              name="perfil"
              placeholder="Informe o perfil"
              className="form-control"
              onChange={(e) => setPerfilUsuario(e.target.value)}
            >
              <option value="usuario">Usuário</option>
              <option value="editor">Editor</option>
              <option value="administrador">Administrador</option>
            </select>
          </div>

          <input type="submit" value="Enviar" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
};

export default Formulario01;
