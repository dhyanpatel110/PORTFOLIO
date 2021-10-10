import React from 'react'
import about from '../assets/image/about-img.svg'
import './About.css'

const About = () => {
    return (
        <>
            <main id="main">
                <section id="about" className="about">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-5 d-flex align-items-center justify-content-center about-img">
                                <img src={about} className="img-fluidq" alt={about}/>
                            </div>
                            <div className="col-lg-6 pt-5 pt-lg-0">
                                <h3>We belive that good design is powerfull, Hard work is essential, and exploring the unknown is importan</h3>
                                <p>  </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fas fa-rocket"></i>
                                        <h4>Our mission</h4>
                                        <p>Our Roadmap starts with our mission, which is enduring. it declares our purpose as a company and serves as the standard against which we weight our action and decisions</p>
                                    </div>
                                    <div className="col-md-6">
                                        <i className="far fa-eye"></i>
                                        <h4>Our Vision</h4>
                                        <p>Over Vision serves as the framework for our Roadmap and guide every aspect of our business by describing what we need to accomplish in order to continue achieving sustainable, quality growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default About