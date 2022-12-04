import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function DatosE() {
    const Navigate = useNavigate();
    const [listado, setListado] = useState([])

    const handleOnClick = () => {
        Navigate("/user/estado")
    }
    const handleOnClick1 = () => {
        Navigate("/")
    }
  
    useEffect(() => {
        fetch("http://localhost:8000/user/DatosE", {
            headers: {
                "content-type": "application/json"
            },
            method: "post",
        }).then(res => res.json())
            .then(res => {
                if (res.estado === "ok") {
                    setListado(res.data1);
                }
            })
    }, [])
    return (
        <>
            <div className="Barra">
                <p className="login-p">Instaya  </p>
                <button className="btn-salir" onClick={() => handleOnClick1()}>Salir</button>
                <button className="btn-volver" onClick={() => handleOnClick()}>Volver</button>
            </div>
            {/* <div className="card border-primary mb-3" > */}
                <table className="table table-dark table-striped-columns"> 
                    <thead>
                        <tr>
                            <th scope="col">Guía</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Ciudad Origen</th>
                            <th scope="col">Ciudad Destino</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        {
                            listado.map(p => <tr key={p.guia}>
                                <td>{p.guia}</td>
                                <td>{p.fecha}</td>
                                <td>{p.origen}</td>
                                <td>{p.destino}</td>
                                <td>{p.estado}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
        </>
    )
}
