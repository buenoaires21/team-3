import React, {useState} from 'react'
import { Route } from 'react-router-dom'
import Register from './Components/Register'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Tabla from './Components/Tabla'

function App() {

  return (
    <> 
     < Navbar/>
    
    <div className="container">

      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      {/* <Route exact path="/projects" component={Register}> </Route>
      <Route exact path="/localidad" component={Register}> </Route>
      <Route exact path="/provincias" component={Register}> </Route>
      <Route exact path="/admin" component={Register}> </Route> */}

    </div>
    {/* <Tabla/> */}
    < Footer/>
    </>
  );
}

export default App;


