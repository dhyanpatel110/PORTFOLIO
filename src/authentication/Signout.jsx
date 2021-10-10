import React from 'react'
import { getAuth, signOut } from "firebase/auth"
import { useHistory } from "react-router-dom"
import { useEffect } from 'react'
import './Signout.css'


import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signout = () => {

    const history = useHistory();

    const logout = ({history}) => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('')
                history.push('/')
            })
            .catch((error) => toast.error(error.message))
    }

    const auth = getAuth();
    

    return (
        <>
            <ul className="navbar-nav ms-3 mb-lg-0">
                <li className="nav-item">
                    <button className="rounded-pill btn btn-outline-warning Signout"  onClick={logout}>Logout</button>
                </li>
            </ul>
            <ToastContainer position="top-center" />
        </>
    )
}

export default Signout
