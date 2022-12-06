import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'



export default function Estado() {
    const Navigate = useNavigate();
    
    const handleOnClick3 =() =>{
        Navigate("/user/Envios")
    } 
    const handleOnClick4 =()=>{
        Navigate("/")
        }
    const handleOnClick5 =()=>{
            Navigate("/user/DatosE")
            } 
  return (
       <>
            <div>
                <div className="Barra">
                        <p className="login-p">Instaya  </p>
                        <button onClick={()=>handleOnClick4()} className="btn-salir" >Salir</button>
                </div>
            </div>
            <button className="btnE" onClick={()=>handleOnClick5()} > Ver Envío</button>
            <button className="btnEnv" type='button' onClick={()=>handleOnClick3()}> Crear Envío</button>
            <div>
                <img src={`../src/img/Logo.png`}/>
            </div>    
            <footer>
                <p className="p-footer">Instaya
                Comunicate con nosotros</p>
                <img className="img-correo" src={`../src/img/Mail.png`} alt="" />
                <img className="img-face" src={`../src/img/Facebook.png`} alt="" />
                <img className="img-insta" src={`../src/img/Insta.png`} alt="" />
                <img className="img-whats" src={`../src/img/Whats.png`} alt="" />
                
            </footer>
        
       </>
  )
}
