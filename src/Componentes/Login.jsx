import {Link, Navigate, useNavigate } from "react-router-dom"


//const Navigate = useNavigate();
const handleOnClick2 =() =>{
    Navigate("/Envios")
}
export default function Login(){
    return(
        <>
            <div className="">
                <p className="login-p">Instaya</p>
            </div>
            <form className="form">
                <p>
                     <label htmlFor=""> Usuario: </label> 
                    <input className="input" type="text" placeholder="Usuario" />
                </p>
                <p>
                     <label htmlFor="">Contraseña: </label> 
                    <input className="input" type="password" placeholder="Contraseña" />
                </p>
                <p>
                 <Link href="">Olvidó la Contraseña</Link>
                 </p>
                <button className="btn" onClick={()=>handleOnClick2()}>Ingresar</button>
            </form>
            <footer>
                <p className="p-footer">Instaya
                Comunicate con nosototros</p>
            </footer>
        
        </>
    )
}