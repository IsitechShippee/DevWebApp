import React from "react";
import './Login.css';

export default function Login() {

    return (
      <section className='Login'>
        <div class="container">
            <h1>Connexion</h1>
            <form action="#">
            <label for="username">Nom d'utilisateur :</label>
            <input type="text" id="username" name="username"/>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password"/>
            <input type="submit" value="Se connecter"/>
        </form>
        </div>
      </section>
    );
}