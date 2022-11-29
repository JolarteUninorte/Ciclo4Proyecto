import React from 'react'

export default function DatosE() {
    return (
        <>
            <div className="Barra">
                <p className="login-p">Instaya  </p>
                <button className="btn-salir" >Salir</button>
                <button className="btn-volver">Volver</button>
            </div>
            <div className="card border-primary mb-3" >
                <table class="table table-bordered table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Guía</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Ciudad Origen</th>
                            <th scope="col">Ciudad Destino</th>
                            <th scope="col">Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td>####</td>
                            <td>dd/mm/aaaa</td>
                            <td>xxxx</td>
                            <td>xxxx</td>
                            <td>xxxx</td>
                        </tr>
                        <tr>
                            {/* <th scope="row">1</th> */}
                            <td>####</td>
                            <td>dd/mm/aaaa</td>
                            <td>xxxx</td>
                            <td>xxxx</td>
                            <td>xxxx</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}
