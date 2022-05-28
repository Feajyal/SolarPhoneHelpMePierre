import React from 'react'
import { Link } from 'react-router-dom'


export default function HomePage() {
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Bienvenu dans le backoffice</h1>
            <Link to="/">
                <button className="primary-button">Déconnexion</button>
            </Link>

            <Link to="/map">
                <button className="primary-button">gotomap</button>
            </Link>
        </div>
    )
}
