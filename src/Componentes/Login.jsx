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
            <form >
                <p>
                    <label htmlFor=""> Usuario: </label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">Contraseña: </label>
                    <input type="text" />
                </p>
                <p>
                 <Link href="">Olvidó la Contraseña</Link>
                 </p>
                <button onClick={()=>handleOnClick2()}>Ingresar</button>
            </form>
            <footer>
                <p className="p-footer">Instaya
                Comunicate con nosototros</p>
            </footer>
        
        </>
    )
}