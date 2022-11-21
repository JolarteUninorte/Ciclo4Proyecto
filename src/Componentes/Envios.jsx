import React from 'react'

export default function Envios() {
  return (
        <>
                <p className="envios-p">Instaya</p>
                <form action="">
                <p>
                    <label htmlFor="">Fecha</label>
                <input type="date" /> 
                <label htmlFor="">Hora</label>
                <input type="time" />
                </p>
                <p>
                    <label htmlFor="">Dirección de entrega: </label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">Ciudad Recogida:</label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">Nombre Destinatario:</label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">Cédula : </label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">Dirección entrega: </label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">Ciudad Entrega:</label>
                    <input type="text" />
                </p>    
                 <button>Crear</button>
                </form>
        </>
  )
}
