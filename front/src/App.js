import React, {useState} from 'react'
import Login from './Components/Login'
import { Link, Route } from 'react-router-dom'
import Register from './Components/Register'


function App() {

  return (

    <div className="container">
      
      <Route exact path="/" component={Login}> </Route>
      <Route exact path="/register" component={Register}> </Route>
      <hr/>
      <Link to='/register'><button type="button" class="btn btn-primary">
        Quiero registrarme</button>
      </Link>


    </div>
  );
}

export default App;


