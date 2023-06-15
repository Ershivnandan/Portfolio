import React from 'react';
import './compoStyle/custom.css';
import { Link, NavLink } from 'react-router-dom';
import logoImg from './Images/snLogo.png';
import Giflogo from './Images/gifLogo.gif';


// import siteLogo form ''

const navbar = () => {



    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-cl">
                <NavLink className="navbar-brand" to="/">
                    <img src={logoImg} alt="Logo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="resume">Resume</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu log-dropdown">
                                  <div className="log-hover">
                                      <a className="dropdown-item dropdown-list" href="#about">About</a>
                                  </div>
                                  <div className="log-hover">
                                      <a className="dropdown-item dropdown-list" href="#ExpEdu">Exp / Edu</a>
                                  </div>
                                  <div className="log-hover">
                                      <a className="dropdown-item dropdown-list" href="#footermain">Contact</a>
                                  </div>
                            </div>
                        </li>

                        <li className="nav-item gif-img">
                            <img src={Giflogo} alt="Gif" />
                        </li>
                        
                    </ul>
                  
                </div>
            </nav>

        </>
    )
}

export default navbar
