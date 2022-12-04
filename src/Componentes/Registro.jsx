import { useRef, useState } from "react";

export default function Registro(){
    const nomRef = useRef();
    const usuRef = useRef();
    const passRef = useRef();
    const emailRef = useRef();
    const [exito, setExito] = useState(false);

    function guardar() {
        //Capturar los datos a guardar
        const nombre = nomRef.current.value;
        const usuario = usuRef.current.value;
        const password = passRef.current.value;
        const correo = emailRef.current.value; 

        fetch("http://localhost:8000/user/save", {
            headers: {
                "content-type": "application/json", //TIPO MIME
            },
            method: "POST",
            body: JSON.stringify({ nombre, usuario, password, correo })
        })
            .then(data => data.json())
            .then(res => {
                if (res.estado == "ok") {
                    setExito(true);
                    limpiar();
                }
            })
            .catch(err => alert(err))
            .finally()
    }
    function limpiar() {
        nomRef.current.value = ""
        usuRef.current.value = ""
        passRef.current.value = ""
        emailRef.current.value = ""
    }

    return(
        <>
            <div className="Barra">
                <p className="login-p">Instaya  </p>
            </div>
            <form className ="formR" action="">
            {exito && <div className="alert alert-primary" role="alert"> usuario guardado</div>}
                <p>
                    <label htmlFor="">Nombre: </label>
                    <input  ref={nomRef} className="input1" type="text" />
                </p>
                <p>
                    <label htmlFor="">Usuario:</label>
                    <input ref={usuRef} className="input1" type="text" />
                </p>
                <p>
                    <label htmlFor="">Contraseña:</label>
                    <input ref={passRef} className="input1" type="password" />
                </p>
                <p>
                    <label htmlFor="">Correo: </label>
                    <input ref={emailRef}  className="input1" type="text" />
                </p>
                <button className="btn" type='button' onClick={guardar} >Crear</button>
            </form>
            <footer>
                <p className="p-footer">Instaya
                Comunicate con nosotros</p>
            </footer>
        
        </>
    )
}