import React from 'react'

const Login = () => {


    return (
        <div>

            <form className='margin-top-form'>
                <div className="form-group ">
                    <label for="exampleInputEmail1">Tu Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Escribe tu email" />
                    <small id="emailHelp" className="form-text text-muted">Tus datos son privados</small>
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Tu contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Escribe tu contraseña" />
                </div>

                <button type="submit" className="btn btn-primary ">Submit</button>
            </form>

        </div>
    )
}

export default Login
