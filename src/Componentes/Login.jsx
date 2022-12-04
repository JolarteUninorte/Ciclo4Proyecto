import { useRef } from "react"
import {Link, Navigate, useNavigate } from "react-router-dom"


//const Navigate = useNavigate();

export default function Login(){
    const usuarioRef =useRef();
    const passwordRef =useRef();

    function login() {
        const Navigate = useNavigate();
        const handleOnClick3 =()=>{
        Navigate("/user/estado")
        }
        const usuario = usuarioRef.current.value;
        const password = passwordRef.current.value;
        console.log("mensaje prueba")
        fetch("http://localhost:8000/login", {
            headers: { "content-type": "application/json" },
            method: "POST",
            body: JSON.stringify({ usuario, password })
            
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    this.props.history.push('/user/estado');
                    //window.location.href = res.url;
                    handleOnClick3();
                } else {
                    alert("Error: Usuario/Password incorrectos")
                }
            })
    }
     
    return(
        <>
            <div className="Barra">
                <p className="login-p">Instaya</p>
            </div>
            <form className="form">
                <p>
                     <label className= "form-label" > Usuario: </label> 
                    <input ref ={usuarioRef} className="input" type="text" placeholder="Usuario" />
                </p>
                <p>
                    <label >Contraseña: </label> 
                    <input ref ={passwordRef} className="input" type="password" placeholder="Contraseña"  />
                </p>
                <p>
                 <Link to={"/user/registro"}>Olvidó la Contraseña</Link>
                 </p>
                <button   className="button" onClick={login}>Ingresar</button>
            </form>
            <footer>
                <p className="p-footer">Instaya
                Comunicate con nosotros</p>
            </footer>
        
        </>
    )
}