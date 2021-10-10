import React from 'react'
import './Certificate.css'

import certificate1 from '../assets/certificate/Mlops.jpg'
import certificate2 from '../assets/certificate/Flutter.jpg'
import certificate3 from '../assets/certificate/Docker.jpg'
import certificate4 from '../assets/certificate/Eks.jpg'
import certificate5 from '../assets/certificate/Devops.jpg'
import certificate6 from '../assets/certificate/GoogleCloud.jpg'


const Certificate = () => {
    return (
        <div>
            <section id="certificate" className="certificate section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Certificate</h2>
                        <p>Check out our beautifull Certificate</p>
                    </div>


                    <div className="row certificate-container">

                        <div className="col-lg-4 col-md-6 certificate-item filter-app">
                            <div className="certificate-wrap">
                                <img src={certificate1} className="img-fluid" alt={certificate1}/>
                                <div className="certificate-links">
                                    <a href={certificate1}><i className="fas fa-plus-circle"></i></a>
                                    <a href="#"><i className="fas fa-link"></i></a>
                                </div>
                                <div className="certificate-info">
                                    <h4>Mlops</h4>
                                    <p>MachineLearning+Devops</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 certificate-item filter-web">
                            <div className="certificate-wrap">
                                <img src={certificate2} className="img-fluid" alt={certificate2} />
                                <div className="certificate-links">
                                    <a href={certificate2}><i className="fas fa-plus-circle"></i></a>
                                    <a href="#"><i className="fas fa-link"></i></a>
                                </div>
                                <div className="certificate-info">
                                    <h4>Flutter</h4>
                                    <p>app</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 certificate-item filter-app">
                            <div className="certificate-wrap">
                                <img src={certificate3} className="img-fluid" alt={certificate3} />
                                <div className="certificate-links">
                                    <a href={certificate3}><i className="fas fa-plus-circle"></i></a>
                                    <a href="#"><i className="fas fa-link"></i></a>
                                </div>
                                <div className="certificate-info">
                                    <h4>Docker</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 certificate-item filter-card">
                            <div className="certificate-wrap">
                                <img src={certificate4} className="img-fluid" alt={certificate4}/>
                                <div className="certificate-links">
                                    <a href={certificate4}><i className="fas fa-plus-circle"></i></a>
                                    <a href="#"><i className="fas fa-link"></i></a>
                                </div>
                                <div className="certificate-info">
                                    <h4>Eks</h4>
                                    <p>aws+kubernetes</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 certificate-item filter-web">
                            <div className="certificate-wrap">
                                <img src={certificate5} className="img-fluid" alt={certificate5} />
                                <div className="certificate-links">
                                    <a href={certificate5}><i className="fas fa-plus-circle"></i></a>
                                    <a href="#"><i className="fas fa-link"></i></a>
                                </div>
                                <div className="certificate-info">
                                    <h4>Devops</h4>
                                    <p>jenkins+docker+kubernetes</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 certificate-item filter-app">
                            <div className="certificate-wrap">
                                <img src={certificate6} className="img-fluid" alt={certificate6}/>
                                <div className="certificate-links">
                                    <a href={certificate6}><i className="fas fa-plus-circle"></i></a>
                                    <a href="#"><i className="fas fa-link"></i></a>
                                </div>
                                <div className="certificate-info">
                                    <h4>GoogleCloud</h4>
                                    <p>App</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Certificate
