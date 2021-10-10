import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../assets/image/Product.svg'
import './SignIn.css'
import { useState, useEffect } from 'react'

import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'





const provider = new GoogleAuthProvider();


const SignIn = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    

    // useEffect(() => {
    //     const token = localStorage.getItem('token');

    //     if (token) {
    //         history.push('/home')
    //     }
    // }, [])

    const onLogin = (e) => {
        e.preventDefault();
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken,);
                history.push('/home')
            })
            .catch(e => toast.error(e.message))
            .finally(() => setLoading(false))

        toast.success("contact added sucessfully")
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className="mainsignin">
                <section className="sign-in">
                    <div className="container-signin">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure><img src={Product} alt={Product} /></figure>
                                <Link to="/signup" className="signup-image-link">Create an account</Link>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title">Sign In</h2>
                                <div className="register-form" id="login-form">
                                    <div className="form-group">
                                        <label className="label-signin"><i class="fas fa-envelope"></i></label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            type="email"
                                            name="email"
                                            placeholder="Your email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="label-signin"><i class="fas fa-lock"></i></label>
                                        <input
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="checkbox"
                                            name="remember-me"
                                            id="remember-me"
                                            className="agree-term"
                                        />
                                        <label className="label-agree-term"><span><span></span></span>Remember me</label>
                                    </div>

                                    <div className="form-group form-button">
                                        <button
                                            onClick={onLogin}
                                            type="submit"
                                            name="signin"
                                            className="form-submit"
                                        >
                                            {loading ? "Logging You in..." : "Signin"}
                                        </button>
                                    </div>
                                </div>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-github"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ToastContainer position="top-center" />
        </>
    )
}

export default SignIn