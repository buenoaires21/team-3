import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('')
    const [mail, setMail] = useState('')
    const [dni, setDni] = useState(0)
    const [cuil, setCuil] = useState(0);
    const [cbu, setCbu] = useState(0);
    /*   const [cbu, setCbu] = useState (0)
      const [cbu, setCbu] = useState (0)
      const [cbu, setCbu] = useState (0)
      const [cbu, setCbu] = useState (0) */


    const onChange = () => {

    }

    const onClick = () => {

    }

    const onSubmit = () => {

    }

    return (
        <div>

            {/* 

            tipo de empleado (select)
            nombre
            apellido
            mail
            dni
            numero de telefono           
            localidad
            direccion
            nivel educativo (select)
            fecha de nacimiento
            input para subir el cv
            codigo postal

            */}
            <div>
                <form>
                    <h2>Datos personales</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Apellido</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Apellido" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Email</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Email" />
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Contraseña" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Telefono</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Telefono" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">DNI</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="DNI" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Cuil</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Cuil" />
                    </div>



                </form>
                <form>
                    <h2>Datos bancarios</h2>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre del banco</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Banco" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Tipo de cuenta</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Tipo de cuenta" />
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">CBU</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="CBU" />
                    </div>

                </form>
                <form>
                    <h2>Información Regional</h2>
                    {/* select */}
                    <select className="form-select select-width" aria-label="Default select example">
                        <option selected>...</option>
                        <option value="1">Santiago</option>
                        <option value="2">Añatuya</option>
                        <option value="3">Monte Quemado</option>
                    </select>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Provincia</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Provincia" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Ciudad</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ciudad" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Codigo Postal</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Codigo Postal" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Dirección</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Direccion" />
                    </div>

                    <hr />

                </form>

                <form>
                    <h2>Información adicional</h2>

                    {/* otro select */}
                    <div className="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                    </div>
                    {/* experiencia laboral */}
                    <div className="form-group">
                        <label for="exampleInputPassword1">Apellido</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Apellido" />
                    </div>
                    {/* cargar un archivo */}

                    <button type="submit" className="btn btn-danger">Submit</button>
                    <Link to='/'><a> Volver atrás </a></Link>

                </form>
            </div>

        </div>
    )
}

export default Register
