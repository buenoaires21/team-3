import React from 'react'

const Login = () => {


    return (
        <div>

            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Tu Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu email" />
                    <small id="emailHelp" class="form-text text-muted">Tus datos son privados</small>
                </div>

                <div class="form-group">
                    <label for="exampleInputPassword1">Tu contraseña</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Login
