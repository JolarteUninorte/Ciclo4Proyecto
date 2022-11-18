import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './Componentes/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './Componentes/Login'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>    
    </>
  )
}

export default App
