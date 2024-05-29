import React from 'react'
import { useState } from 'react'

const RenderLista = () => {

  const [listaNomes , setListaNomes] = useState(["Pedro","Maria","José","Paulo"])


  return (
    <>
     <div>RenderLista</div>
    <ul>
        {
            listaNomes.map((item,indice)=> (
                <li key={indice}>{item}</li>
            ))
        }
    </ul>

    
    </>
    
   




  )
}

export default RenderLista