import './App.css'
import Eventos from './components/Eventos'
import GerenciarDados from './components/GerenciarDados'
import PrimeiroComponente from './components/PrimeiroComponente'
import RenderLista from './components/RenderLista'

function App() {
  

  return (
   <div>
    <h1>Fundamentos React</h1>
    <PrimeiroComponente />
    <Eventos />
    <GerenciarDados />
    <RenderLista></RenderLista>
   </div>
  )
}

export default App
