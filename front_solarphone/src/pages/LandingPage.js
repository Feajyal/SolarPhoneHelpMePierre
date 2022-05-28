import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
import BackgroundImage from '../assets/images/bg.png'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Solar phone</h1>
            <p className="main-para text-center">Recharger vos appareils avec l'énergie solaire.</p>
            <div className="buttons text-center">
                <Link to="login">
                    <button className="primary-button">Connexion</button>
                </Link>
                <Link to="register">
                    <button className="primary-button" id="reg_btn"><span>S'inscrire </span></button>
                </Link>
            </div>
        </header>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
