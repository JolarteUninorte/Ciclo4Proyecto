import React from 'react'

export default function Envios() {
  return (
        <>  
           <div className="">
                <p className="login-p">Instaya  </p>
            </div>
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
                    <input type="number" />
                </p>
                <p>
                    <label htmlFor="">Dirección entrega: </label>
                    <input type="text" />
                </p>
                <p>
                    <label htmlFor="">Ciudad Entrega:</label>
                    <input type="text" />
                </p>    
                <button type='button'>Crear</button>
            </form>
        </>
  )
}
