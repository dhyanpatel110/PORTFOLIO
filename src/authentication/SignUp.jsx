import React from 'react'
import { Link } from 'react-router-dom'
import Growth from "../assets/image/Growth.svg"
import "./SignUp.css"
import { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignUp = ({ history }) => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    

    const clearState = () => {
        setUser('')
        setEmail('')
        setMobile('')
        setPassword('')
        setConfirmPassword('')
    }

    const onSignup = () => {
        setLoading(true);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                updateProfile(auth.currentUser, { displayName: user })
                    .then(() => history.push("/home"))
                    .catch((e) => toast.error(e.message))
            })
            .catch((e) => toast.error(e.message))
            .finally(() => setLoading(false))
            clearState()
        
    }

    return (
        <>
            <div className="main">
                <section className="signup">
                    <div className="container-signup">
                        <div className="signup-content">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <div className="register-form" id="register-form">

                                    <div className="form-group">
                                        <label className="label-signup" ><i class="fas fa-user"></i></label>
                                        <input
                                            value={user}
                                            onChange={e => setUser(e.target.value)}
                                            type="name"
                                            name="name"
                                            placeholder="Your Name"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="label-signup"><i class="fas fa-envelope"></i></label>
                                        <input
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="label-signup"><i class="fas fa-phone-alt"></i></label>
                                        <input
                                            value={mobile}
                                            onChange={e => setMobile(e.target.value)}
                                            type="number"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label className="label-signup"><i className="zmdi zmdi-lock material-icons-name"></i></label>
                                        <input
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="label-signup"><i className="zmdi zmdi-lock-outline material-icons-name"></i></label>
                                        <input
                                            value={confirmpassword}
                                            onChange={e => setConfirmPassword(e.target.value)}
                                            type="password"
                                            name="Confirm Password"
                                            placeholder="Confirm Password"
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="checkbox"
                                            name="agree-term"
                                            className="agree-term"
                                            id="agree-term"
                                        />
                                        <label className="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
                                    </div>

                                    <div className="form-group form-button">
                                        <button
                                            onClick={onSignup}
                                            type="submit"
                                            name="signup"
                                            className="form-submit"
                                        >
                                            {loading ? "Creating User..." : "Signup"}
                                        </button>

                                    </div>

                                </div>
                            </div>

                            <div className="signup-image">
                                <figure><img src={Growth} alt={Growth} /></figure>
                                <Link to="/" className="signup-image-link">I am already member</Link>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <ToastContainer position="top-center" />
        </>
    )
}

export default SignUp