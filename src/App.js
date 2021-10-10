import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "./App.css";
import { useState, useEffect } from 'react';

import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Services from './components/Services';
import Contact from './components/Contact';
import SignIn from './authentication/SignIn';
import SignUp from './authentication/SignUp';
import Logout from './authentication/Signout';
import All from './components/All'

import Footer from './helper/Footer';


import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeFirebase } from "./authentication/FireBase";
initializeFirebase();



const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, [])

  return (
    <>
      {/* <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/project' component={Project} />
        <Route exact path='/certificate'><Certificate /></Route>
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/logout' component={Logout} />
  
        
        <Redirect to='/home' />
      </Switch> */}

      <Switch>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/about' component={About} />
      <All/> 
      {/* <Home />
      <About />
      <Services />
      <Project />
      <Certificate />
      <Contact />
      <Footer/> */}
      
      </Switch>

   

    

    </>

  );
};

export default App;