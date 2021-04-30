import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <Login/>
            
            <Link to='/register'><button type="button" class="btn btn-primary">
                Quiero registrarme</button>
            </Link>
        </div>
    )
}

export default Home
