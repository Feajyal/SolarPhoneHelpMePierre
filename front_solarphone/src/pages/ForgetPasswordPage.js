import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function ForgetPasswordPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Réinitialiser votre mot de passe</h2>
            <h5>Entrez votre adresse e-mail et nous vous enverrons un nouveau mot de passe</h5>
            <form action="/login">
                <p>
                    <label id="reset_pass_lbl">Adresse e-mail</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Demander </button>
                </p>
            </form>
            <footer>
                <p>Première visite ? <Link to="/register">Créer un compte</Link>.</p>
                <p><Link to="/">Retour accueil</Link>.</p>
            </footer>
        </div>
    )
}
