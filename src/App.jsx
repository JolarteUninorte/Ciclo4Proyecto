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
          <Route path='/login' element={<Login/>}/>
          <Route path='/user/registro' element={<Registro/>}/>
          <Route path='/user/envios' element={<Envios/>}/>
          <Route path='/user/Estado' element={<Estado/>}/>
          <Route path='/user/DatosE' element={<DatosE/>}/>
          <Route path='/*' element={<h1> Página no encontrada</h1>}/>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
