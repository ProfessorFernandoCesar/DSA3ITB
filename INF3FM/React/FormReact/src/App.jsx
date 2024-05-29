import "./App.css";
import ExemploProps01 from "./components/ExemploProps01";
import ExemploProps02 from "./components/ExemploProps02";
import Formulario01 from "./components/Formulario01";

function App() {
  return (
    <>
      <h1>Formulários no React</h1>
      {/* <ExemploProps01 nome="Pedro"></ExemploProps01>
      <ExemploProps02 marca="Fiat" modelo="Punto" ano={2013}></ExemploProps02> */}

      <Formulario01></Formulario01>
    </>
  );
}

export default App;
