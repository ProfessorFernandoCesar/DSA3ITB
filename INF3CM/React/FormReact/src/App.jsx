
import { useState } from 'react'
import './App.css'
import ExemploProps01 from './components/ExemploProps01'
import ExemploProps02 from './components/ExemploProps02'
import Formulario01 from './components/Formulario01'

function App() {
  
  const [nomeUsuario,letNomeUsuario]=useState("Pedro")
  
  return (
    <>
      <h1>Trabalhando com Formulários</h1>


      {/* <ExemploProps01 nome={nomeUsuario} />
      <ExemploProps02 marca="Fiat" anoFabricacao={2013} modelo="Uno" /> */}

      <Formulario01></Formulario01>

    </>
  )
}

export default App
