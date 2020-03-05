import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="contentNavbar">
            <img className="iconNavbar" src={require('./image/icon_navbar.png')}/>
            {window.screen.width < 1280 ?
            <div className="contentSection">
                <Link className="navbarSection" to="/">Tous</Link>
                <Link className="navbarSection" to="/texte-recent">Les derniers</Link>
                <Link className="navbarSection" to="/poster-texte">Partages</Link>
            </div>
            :
            <div className="contentSection">
                <Link className="navbarSection" to="/">Tous les lyrics</Link>
                <Link className="navbarSection" to="/texte-recent">Les derniers lyrics</Link>
                <Link className="navbarSection" to="/poster-texte">Partages t'es lyrics</Link>
            </div>}
        </div>
    )
}

export default Navbar