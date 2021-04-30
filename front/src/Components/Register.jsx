import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState(0)
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('')
    const [dni, setDni] = useState(0)
    const [cuil, setCuil] = useState(0);
    const [bankName, setBankName] = useState('');
    const [bankClass, setBankClass] = useState('')
    const [cbu, setCbu] = useState(0) 
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState(0);
    const [direction, setDirection] = useState('');



    const onChange = () => {

    }

    const onClick = () => {

    }

    const onSubmit = () => {

    }

    return (
        <div>

            <div>
                <h1 className='margin-top-form text-center'>Ingrese sus datos</h1>
                <hr/>
                <form >
                    <h2>Usuario</h2>
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


                </form>
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

                    {/*  nivel educativootro select */}
                    <select className="form-select select-width" aria-label="Default select example">
                        <option selected>...</option>
                        <option value="1">Secundario Incompleto</option>
                        <option value="2">Secundario Completo</option>
                        <option value="3">Terciario</option>
                        <option value="4">Universitario Incompleto</option>
                        <option value="5">Universitario Completo</option>
                    </select>

                    {/* experiencia laboral */}
                    <div className="form-group">
                        <label for="exampleInputPassword1">Experiencia Laboral</label>
                        <input type="text
                        " className="form-control" id="exampleInputPassword1" placeholder="Experiencia Laboral" />
                    </div>
                    {/* cargar un archivo */}
                    <input type="file" />

                    <hr/>

                    <button type="submit" className="btn btn-danger">Submit</button>                   
                    <hr/>
                </form>
                <Link to='/'><a> Volver atrás </a></Link>
            </div>

        </div>
    )
}

export default Register
