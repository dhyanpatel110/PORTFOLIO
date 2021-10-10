import React from 'react';
import { Link } from 'react-scroll'
import logo from '../assets/image/logo.png'
import './Navbar.css'

import{ useHistory } from 'react-router-dom'

import Signout from '../authentication/Signout'
import SignIn from '../authentication/SignIn';

const Navbar = () => {
let history = useHistory();

    return (
        <>
            <div className="container-fluid nav_bg fixed-top">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="home" ><img className="logo" src={logo} alt="..." /></Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-lg-0">
                                <li className="nav-item">
                                    <Link
                                        // activeClassName="menu_active"
                                        exact className="nav-link"
                                        aria-current="page"
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        // activeClassName="menu_active"
                                        className="nav-link"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        About
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        // activeClassName="menu_active"
                                        className="nav-link"
                                        to="services"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Services
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        // activeClassName="menu_active"
                                        className="nav-link"
                                        to="project"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Project
                                    </Link>
                                </li>



                                <li className="nav-item">
                                    <Link
                                        // activeClassName="menu_active"
                                        className="nav-link"
                                        to="certificate"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Certificate
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link
                                        // activeClassName="menu_active"
                                        className="nav-link"
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                    >
                                        Contact
                                    </Link>
                                </li>





                                <ul className="navbar-nav ms-3 mb-lg-0">
                                    <li className="nav-item">
                                        <button className="rounded-pill btn btn-outline-warning Signout" onClick={()=>{history.push("/");}}>SignIn</button>
                                    </li>
                                </ul>

                            </ul>


                            {/* <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink activeClassName="menu_active" className="rounded-pill btn btn-outline-warning" to="/logout">Logout</NavLink>
                                        </li>

                                    </ul> */}

                            {/* <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <button className="rounded-pill btn btn-outline-warning" onClick={logout}>Logout</button>
                                        </li>
                                    </ul> */}




                            {/* <header id="header" class="fixed-top">
                <div class="container-fluid d-flex">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div class="logo mr-auto">
                        <h1 class="text-light"><a href="index.html"><span>Ninestars</span></a></h1>
                        <!-- Uncomment below if you prefer to use an image logo -->
                        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>
                    </div>

                    <nav class="nav-menu d-none d-lg-block navbar-nav ms-auto mb-2 mb-lg-0">

                        <ul>
                            <li class="active"><a href="#header">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>

                        </ul>
                    </nav>

                </div>
            </header> */}



                            {/* <Signout /> */}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar