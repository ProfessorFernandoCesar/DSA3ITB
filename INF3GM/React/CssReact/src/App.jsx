import "./App.css";
import ClasseDinamica from "./components/ClasseDinamica";
import MeuComponente from "./components/MeuComponente";
import { Titulo } from "./components/Titulo";

function App() {
  return (
    <>
      <div>
        <h1>React com CSS</h1>
      </div>
      <p>Estou no parágrafo do App</p>

      <MeuComponente></MeuComponente>
      <Titulo></Titulo>
      <ClasseDinamica></ClasseDinamica>
    </>
  );
}

export default App;
