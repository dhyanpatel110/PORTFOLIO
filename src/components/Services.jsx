import React from 'react'
import './Services.css'

const Services = () => {
    return (
        <div>
            <section id="services" className="services section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>Check out the great services we offer</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-cogs"></i></div>
                                <h4 className="title"><a href="">Integration</a></h4>
                                <p className="description">We are know how to integrate two different technologies at a time</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-hourglass-half"></i></div>
                                <h4 className="title"><a href="">Time</a></h4>
                                <p className="description">We are complete every single project time to time</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="far fa-file-alt"></i></div>
                                <h4 className="title"><a href="">Documentation</a></h4>
                                <p className="description">All project are well documentation and detail content for better understand</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="icon-box">
                                <div className="icon"><i className="fas fa-headset"></i></div>
                                <h4 className="title"><a href="">Support</a></h4>
                                <p className="description">We are clear all doubt related to projects and give best solution of it</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Services
