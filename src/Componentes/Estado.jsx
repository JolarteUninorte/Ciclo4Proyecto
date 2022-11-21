import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const handleOnClick3 =() =>{
    Navigate("/Envios")
} 
export default function Estado() {
  return (
       <>
            <div>
                <div className="">
                        <p className="login-p">Instaya  </p>
                        <button className='btnsalir'>Salir</button>
                </div>
            </div>
            <button> Ver Envío</button>
            <button type='button' onClick={()=>handleOnClick3()}> Crear Envío</button>
            <div>
                <img src={`../src/img/Logo.png`}/>
            </div>    
            <footer>
                <p className="p-footer">Instaya
                Comunicate con nosototros</p>
                <img className="img-correo" src={`../src/img/Mail.png`} alt="" />
                <img className="img-face" src={`../src/img/Facebook.png`} alt="" />
                <img className="img-insta" src={`../src/img/Insta.png`} alt="" />
                <img className="img-whats" src={`../src/img/Whats.png`} alt="" />
                
            </footer>
        
       </>
  )
}
