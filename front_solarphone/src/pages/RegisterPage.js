import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

export default function SignUpPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>Rejoignez solarPhone</h2>
            <h5>Créer votre compte personnel</h5>
            <form action="/home">
                <p>
                    <label>Nom d'utilisateur</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Adresse email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Mot de passe</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required />
                    <span>J'accepte les
                        <a href="https://google.com" target="_blank" rel="noopener noreferrer"> conditions générales</a>
                    </span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">S'inscrire</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Retour accueil</Link>.</p>
            </footer>
        </div>
    )

}
