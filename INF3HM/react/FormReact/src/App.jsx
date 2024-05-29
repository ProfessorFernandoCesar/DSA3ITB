import { useState } from "react";
import "./App.css";
import ExemploProps01 from "./components/ExemploProps01";
import ExemploProps02 from "./components/ExemploProps02";
import Formulario01 from "./components/Formulario01";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("Paulo");

  return (
    <>
      
      {/* props */}
      {/* <ExemploProps01 nome={nomeUsuario} /> */}
      {/* <ExemploProps02 modelo="Punto" marca="Fiat" ano={2015}/> */}

      {/* <Formulario01 ></Formulario01> */}

      <Formulario01 usuario={{nome:"Fernando" , email:"fernando@gmail.com" , descricao:"Professor ITB", perfil:"usuário"}} ></Formulario01>
    </>
  );
}

export default App;
