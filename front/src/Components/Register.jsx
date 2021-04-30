import React from 'react'

const Register = () => {


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
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nombre</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre" />
                        <small id="emailHelp" class="form-text text-muted">Tus datos son privados</small>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Apellido</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Apellido" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Email</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Email" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">DNI</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="DNI" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Numero de telefono   </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Numero de telefono" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Localidad</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Localidad" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Direccion</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Direccion" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Nivel educativo</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nivel educativo" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Fecha de nacimiento</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Fecha de nacimiento" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Register
