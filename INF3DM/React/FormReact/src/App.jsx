
import { useState } from 'react'
import './App.css'
import ExemploProps01 from './components/ExemploProps01'
import ExemploProps02 from './components/ExemploProps02'
import Formulario01 from './components/Formulario01'

function App() {
  const [nomeUsuario,setNomeUsuario] = useState("Pedro")

  return (
    <>
      {/* <ExemploProps01 nome={nomeUsuario}></ExemploProps01> */}
      {/* <ExemploProps02 marca="Fiat" modelo="Idea" kilometragem={40000} /> */}
    {/* <Formulario01></Formulario01> */}

    <Formulario01 user={{nome:"Pedro",email:"pedro@teste.com",descricao:"Aluno do ITB",perfil:"usuário"}} ></Formulario01>
    </>
  )
}

export default App
