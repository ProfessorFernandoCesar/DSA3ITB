
import { useState } from 'react'
import './App.css'
import ExemploProps01 from './components/ExemploProps01'
import ExemploProps02 from './components/ExemploProps02'
import Formulario01 from './components/Formulario01'

function App() {

  const [nomeUsuario,setNomeUsuario] = useState("Alfredo")

  return (
    <>
         
     {/* <ExemploProps01 nomeUsuario={nomeUsuario} />
     <ExemploProps02 marca="Fiat" anoFabricacao={2021} modelo="Punto" /> */}

     <Formulario01></Formulario01>



    </>
  )
}

export default App
