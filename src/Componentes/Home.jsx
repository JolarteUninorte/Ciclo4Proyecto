import { Navigate, useNavigate } from "react-router-dom"


export default function Home(){
    
    const Navigate = useNavigate();
    
    const handleOnClick =()=>{
        Navigate("/login")
        }
    const handleOnClick1 =()=>{
        Navigate("/user/registro")
        }   
    
    return( 
        
        <>
            <div className="Barra">
                <button className="btn-Ingresa" type="button" onClick={()=>handleOnClick()}>Ingresa</button>
                <button className="btn-Registro"type="button" onClick={()=>handleOnClick1()} >Registro</button>
            </div>
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