import React from 'react'

import Home from './Home';
import About from './About';
import Project from './Project';
import Certificate from './Certificate';
import Services from './Services';
import Contact from './Contact';
import Footer from '../helper/Footer';

const All = () => {
    return (
        <div>
      <Home />
      <About />
      <Services />
      <Project />
      <Certificate />
      <Contact />
      <Footer/>
        </div>
    )
}

export default All
