import "./App.css";
import MeuComponente from "./components/MeuComponente";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <h1>CSS no React</h1>
      <p>Este parágrafo é do APP</p>
      <p className='paragrafoApp'>Este é um parágrafo com o estilo do componente no APP</p>
      <MeuComponente></MeuComponente>
      <Titulo></Titulo>
    </>
  );
}

export default App;
