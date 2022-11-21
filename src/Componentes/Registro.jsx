export default function Registro(){

    return(
        <>
            <div className="Barra">
                <p className="login-p">Instaya  </p>
            </div>
            <form className ="formR" action="">
                <p>
                    <label htmlFor="">Nombre: </label>
                    <input className="input1" type="text" />
                </p>
                <p>
                    <label htmlFor="">Usuario:</label>
                    <input className="input1" type="text" />
                </p>
                <p>
                    <label htmlFor="">Contraseña:</label>
                    <input className="input1" type="password" />
                </p>
                <p>
                    <label htmlFor="">Correo: </label>
                    <input  className="input1" type="text" />
                </p>
            </form>
                <button className="btn" type='button' >Crear</button>
            <footer>
                <p className="p-footer">Instaya
                Comunicate con nosotros</p>
            </footer>
        
        </>
    )
}