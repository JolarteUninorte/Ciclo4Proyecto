import { useNavigate } from "react-router-dom"

export default function Home(){
    
    const navigate = useNavigate();

    function handkeClick(){
        <Route path='/Login' element={<Login/>}/>
        navigate(<Route path='/Login' element={<Login/>}/>)
    }
       
    
    return(
        
        <>
            <div className="Barra">
                <button className="btn-Ingresa" type="button" onClick={(e)=>handkeClick()}>Ingresa</button>
                <button className="btn-Registro">Registro</button>
            </div>
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