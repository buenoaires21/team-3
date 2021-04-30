import React, {useState} from 'react'
import { Route } from 'react-router-dom'
import Register from './Components/Register'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DirectorAccount from './Components/DirectorAccount'
import Metrics from './Components/Metrics'

function App() {

  return (
    <> 
     < Navbar className='mb-5'/>
    
    <div className="container font-page">

      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/directoraccount" component={DirectorAccount}/>
      <Route exact path="/metrics" component={Metrics}/>


    </div>
    {/* <Tabla/> */}
    < Footer/>
    </>
  );
}

export default App;


