 
import './App.css'
import PrimeiroComponente from './components/PrimeiroComponente'
import Eventos from './components/Eventos'
import GerenciarDados from './components/GerenciarDados'
import ListRender from './components/ListRender'

function App() {
   

  return (
   <div>
      <h1>Fundamentos React</h1>

      <PrimeiroComponente />
      <Eventos /> 
      <GerenciarDados></GerenciarDados>
      <ListRender></ListRender>
   </div>



  )
}

export default App
