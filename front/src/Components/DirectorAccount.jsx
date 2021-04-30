import React from 'react'
import { Link } from 'react-router-dom'
import { FiCheck } from "react-icons/fi";
import { BiWorld, BiBriefcase, BiBarChartAlt } from "react-icons/bi";


const DirectorAccount = () => {

    return (
        <div className='diraccount-margin-top'>

            <div className="wrapper ">
                <div className="sidebar" data-color="white" data-active-color="danger">
                    <h1>Admin Account</h1>
                    <div className="logo">
                        <Link to='/'><center className='navbar-title'>Haciendo caminos</center></Link>

                        <a href="https://haciendocamino.org.ar/" className="simple-text logo-normal">

                            <div className="logo-haciendo-caminos">
                                <img src="https://innovatech.com.ar/wp-content/uploads/2017/07/ISOLOGO-Haciendo-Camino-300x268.png" />
                            </div>
                        </a>
                    </div>
                    <div className="container sidebar-wrapper">
                        <ul className="nav">
                            <li className="active ">
                                <a href="javascript:;">
                                    <FiCheck />
                                    <p>Confirmar asistencias</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <BiWorld />
                                    <p>Compañeros regionales</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <BiBriefcase />
                                    <p>Compañeros por proyecto</p>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <BiBarChartAlt />
                                    <p>Metricas</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-panel" >


                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <h3 className="description">Your content here</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DirectorAccount
