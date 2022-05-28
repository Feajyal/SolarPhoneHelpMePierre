import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Connectez-vous</h2>
            <form action="/home">
                <p>
                    <label>Adresse email</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Mot de passe</label>
                    <Link to="/forget-password"><label className="right-label">Mot de passe oublié ?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Connexion</button>
                </p>
            </form>
            <footer>
                <p>Première visite ? <Link to="/register">Créer un compte</Link>.</p>
                <p><Link to="/">Retour accueil</Link>.</p>
            </footer>
        </div>
    )
}
