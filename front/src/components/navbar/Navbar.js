import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className="contentNavbar">
            <img className="iconNavbar" src={require('./image/icon.jpg')}/>
            {window.screen.width < 1280 ?
            <div className="contentSection">
                <Link className="navbarSection" to="/">Tous</Link>
                <Link className="navbarSection" to="/collab-texte">Espace collab</Link>
                <Link className="navbarSection" to="/poster-texte">Partager</Link>
            </div>
            :
            <div className="contentSection">
                <Link className="navbarSection" to="/">Tous les lyrics</Link>
                <Link className="navbarSection" to="/collab-texte">Les textes collaboratifs</Link>
                <Link className="navbarSection" to="/poster-texte">Partages tes textes</Link>
            </div>}
        </div>
    )
}

export default Navbar