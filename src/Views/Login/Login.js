import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Login.css'

import SignIn from './SignIn/SignIn'
import SignUp from './SignUp/SignUp'

function Login(props) {

    const connect = (id, psw) => {
        console.log(id, psw)
        props.setConnectInfo({ id: id, psw: psw })
        props.setLoading(true)
    }

    return (
        <div className='login'>

            <Routes>
                <Route path="/*" element={<SignIn connect={connect} error={props.error} setError={props.setError}/>} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default Login