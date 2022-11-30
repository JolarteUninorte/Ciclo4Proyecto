import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Envios() {
    const Navigate = useNavigate();
    const handleOnClick4 =()=>{
    Navigate("/")
    }

    const diReRef = useRef();
    const cityrRef = useRef();
    const nameRef = useRef();
    const cedulaRef = useRef();
    const dirERef = useRef();
    const cityERef = useRef();
    const [exito, setExito] = useState(false);

    function guardarE() {
        //Capturar los datos a guardar
        const dirR = diReRef.current.value;
        const cityR = cityrRef.current.value;
        const name = nameRef.current.value;
        const cedula =cedulaRef.current.value; 
        const dirE = dirERef.current.value; 
        const cityE =cityERef.current.value; 

        fetch("http://localhost:8000/user/envios", {
            headers: {
                "content-type": "application/json", //TIPO MIME
            },
            method: "POST",
            body: JSON.stringify({ dirR, cityR, name, cedula, dirE, cityE})
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
            diReRef.current.value="" 
            cityrRef.current.value=""
            nameRef.current.value="" 
            cedulaRef.current.value= ""
            dirERef.current.value=""  
            cityERef.current.value=""
        }

    return (
        <>
            <div className="Barra">
                <p className="login-p">Instaya  </p>
            </div>
            <form action="">
                {exito && <div className="alert alert-primary" role="alert"> Envio guardado</div>}
                    <p>
                        <label htmlFor="">Fecha</label>
                        {/* <input className='input' type="date" /> */}
                        <label htmlFor="">Hora</label>
                        {/* <input className='input' type="time" /> */}
                    </p>
                    <p>
                        <label htmlFor="">Dirección de Recogida: </label>
                        <input ref={diReRef} className='input' type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Ciudad Recogida:</label>
                        <input ref={cityrRef} className='input' type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Nombre Destinatario:</label>
                        <input ref={nameRef} className='input' type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Cédula : </label>
                        <input ref={cedulaRef} className='input' type="number" />
                    </p>
                    <p>
                        <label htmlFor="">Dirección entrega: </label>
                        <input ref={dirERef} className='input' type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Ciudad Entrega:</label>
                        <input ref={cityERef} className='input' type="text" />
                    </p>
                    <button className="btn" type='button' onClick={guardarE}>Crear</button>
            </form>
                <button onClick={()=>handleOnClick4()} className='btn-salir' type='button'>Salir</button>

        </>
    )
}
