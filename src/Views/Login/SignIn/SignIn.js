import React, { useState } from 'react'
// import './SignIn.css'
import { Link } from 'react-router-dom'

import Picture from '../../../Pictures/Pictures'

function SignIn(props) {


    const [id, setId] = useState('') 
    const [psw, setPsw] = useState('') 

    const connect = () => {
        console.log(id, psw)
        props.connect(id, psw)
    }

    return (
        <div className='sign_in'>

            <div className='bienvenue'>
                <h1>BIENVENUE</h1>
            </div>

            <div className='content_sign_in'>
                <div className='username'>
                    <input type='text' placeholder='Idantifiant' name='username' value={id} onChange={(e) => {setId(e.target.value)}}/>
                </div>

                <div className='password'>
                    <input type='password' placeholder='Mot de passe' name='password' value={psw} onChange={(e) => {setPsw(e.target.value)}}/>
                    <Link to='/sign-up' className='little_button forget_psw'><img src={Picture.Play} alt='play' />Mot de passe oublié</Link>
                </div>

                <div>
                    {props.error && <p className='error_content'> {props.error} </p>}
                    <button className='connect' onClick={connect}>Connexion</button>
                </div>

                <div className='create'>
                    <h3>Pas encore inscrit ?</h3>
                    <Link to='/sign-up' className='little_button'>
                        <img src={Picture.Play} alt='play' />Creer un compte
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SignIn