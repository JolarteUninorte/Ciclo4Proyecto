import React from 'react'

export default function Envios() {
    return (
        <>
            <div className="Barra">
                <p className="login-p">Instaya  </p>
            </div>
                <form action="">
                    <p>
                        <label htmlFor="">Fecha</label>
                        <input className='input' type="date" />
                        <label htmlFor="">Hora</label>
                        <input className='input' type="time" />
                    </p>
                    <p>
                        <label htmlFor="">Dirección de entrega: </label>
                        <input className='input' type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Ciudad Recogida:</label>
                        <input className='input' type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Nombre Destinatario:</label>
                        <input className='input' type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Cédula : </label>
                        <input className='input' type="number" />

                    </p>
                    <p>
                        <label htmlFor="">Dirección entrega: </label>
                        <input className='input' type="text" />
                    </p>
                    <p>
                        <label htmlFor="">Ciudad Entrega:</label>
                        <input className='input' type="text" />
                    </p>

                    <button className="btn" type='button'>Crear</button>

                </form>
                    <button className='btn-salir' type='button'>Salir</button>
            
        </>
    )
}
