import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Componentes/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './Componentes/Login'
import Envios from './Componentes/Envios'
import Registro from './Componentes/Registro'
import Estado from './Componentes/Estado'
import DatosE from './Componentes/DatosE'

function App() {
  
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Registro' element={<Registro/>}/>
          <Route path='/Envios' element={<Envios/>}/>
          <Route path='/Estado' element={<Estado/>}/>
          <Route path='/DatosE' element={<DatosE/>}/>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
