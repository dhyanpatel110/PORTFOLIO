import React from 'react'
import home from '../assets/image/hero-img.svg'
import Navbar from '../Layout/Navbar'
import "./Home.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
              <h1>Bettter high-tech experience with Code Army</h1>
              <h2>I'm very talented to make websites with React Js and integrate with Machine Learning and Other Technologies</h2>
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img">
              <img src={home} className="img-fluid animated" alt={home} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home