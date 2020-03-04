import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return(
        <div className="contentFooter">
                {window.screen.width < 1280 ?
            <div className="contentSectionFooter">
                <Link className="footerSection" to="/">Tous</Link>
                <Link className="footerSection" to="/texte-recent">Les derniers</Link>
                <Link className="footerSection" to="/poster-texte">Partages</Link>
            </div>
            :
            <div className="contentSectionFooter">
                <Link className="footerSection" to="/">Tous les lyrics</Link>
                <Link className="footerSection" to="/texte-recent">Les derniers lyrics</Link>
                <Link className="footerSection" to="/poster-texte">Partages t'es lyrics</Link>
            </div>}
        </div>
    )
}

export default Footer;