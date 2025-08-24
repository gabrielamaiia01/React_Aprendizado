import { useState } from 'react'
import React from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManagerData from './components/managerData'
import ListRender from './components/ListRender'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='avancado'>
      <h1>Avançado em React</h1>
      {/*Imagem em public */}
      <img src='/carreira-de-tradutor.jpg'></img>


      {/*Imagem em public */}
      <div>
        <img src={React}></img>
      </div>

      <ManagerData/>
      <ListRender/>
    </div>

    </>
  )
}

export default App
