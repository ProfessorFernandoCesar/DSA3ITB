import { useState } from "react";
import "./App.css";
import ExemploProps01 from "./components/ExemploProps01";
import ExemploProps02 from "./components/ExemploProps02";
import Formulário01 from "./components/Formulário01";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("Pedro");

  return (
    <>
      
      {/* <ExemploProps01 nome={nomeUsuario}></ExemploProps01> */}
      {/* <ExemploProps02
        idUsuario={1273}
        perfilUsuario="Administrador"
        nomeUsuario={nomeUsuario}
      ></ExemploProps02> */}

      <Formulário01 usuario={{nome:"José Albert" , email:"ja@gmail.com", descricao:"Aluno do ITB", perfil:"usuário"}}       ></Formulário01>
    
    
    </>
  );
}
export default App;
