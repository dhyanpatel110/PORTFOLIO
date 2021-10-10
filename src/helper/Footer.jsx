import React from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/image/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div class="section-bg">
                <footer className="footer-distributed container">
                    <div className="footer-left">

                        <h3>Code<span>Army</span></h3>

                        <Link to="/home"><img className="footer-logo" src={logo} alt={logo} /></Link>
                        <p className="footer-links">
                            <Link to="home" className="link-1">Home</Link>
                            <Link to="about">About</Link>
                            <Link to="project">Project</Link>
                            <Link to="certificate">Certificate</Link>
                            <Link to="contact">Contact</Link>
                        </p>
                        <p className="footer-company-name">Copyright Code Army © 2021 All Rights Reserved</p>
                    </div>

                    <div className="footer-center">

                        <div>
                            <i className="zmdi zmdi-pin"></i>
                            <p className="span-footer"><span>AA-4 Nalanda Bunglows</span> Ahemdabad, Gujarat</p>
                        </div>

                        <div>
                            <i className="zmdi zmdi-phone"></i>
                            <p className="span-footer">+91 7984622002</p>
                        </div>

                        <div>
                            <i className="zmdi zmdi-email"></i>
                            <p className="span-footer"><a href="mailto:support@company.com">dhyanpatel110@gmail.com</a></p>
                        </div>

                    </div>

                    <div className="footer-right">
                        <p className="footer-company-about">
                            <span>About the company</span>
                            This website is for the Showcase of the skills and different projects.We Intigrate the different Tools in the project.
                        </p>

                        <div className="footer-icons">
                            <a href="#"><i className="zmdi zmdi-github-box"></i></a>
                            <a href="#"><i className="zmdi zmdi-linkedin-box"></i></a>
                            <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                            <a href="#"><i className="zmdi zmdi-facebook-box"></i></a>
                            <a href="#"><i className="zmdi zmdi-twitter-box"></i></a>
                        </div>

                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer
