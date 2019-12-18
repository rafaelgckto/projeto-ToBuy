import React from 'react';
// import { animate } from "../assets/js/script";

// Css (assets/css)
import '../assets/css/rodape.css';
import '../assets/css/style.css';

// Imagens (assets/img)
import LogoThoughtWorks from '../assets/img/logo-thoughtworks.png';

// Scalable Vector Graphics - .SVG (assets/svg)
import LogoFacebook from '../assets/svg/Footer/facebook-logo.svg';
import LogoInstagram from '../assets/svg/Footer/instagram-logo.svg';
import LogoTwitter from '../assets/svg/Footer/twitter-logo.svg';
import LogoLinkedIn from '../assets/svg/Footer/linkedin-logo.svg';
import LogoGitHub from '../assets/svg/Footer/github-logo.svg';

function Rodape() {
    return (
        <footer className="rodape-home flex-between">
            <img className="logo-tw flex-between" src={LogoThoughtWorks} alt="" />
            <div className="rodape-links flex-center">
                <div className="rodape-icons flex-around">
                    <img className="logo-rede-sociais" src={LogoFacebook} alt='icone logo facebook'/>
                    <img className="logo-rede-sociais" src={LogoInstagram} alt='icone logo instagram'/>
                    <img className="logo-rede-sociais" src={LogoTwitter} alt='icone logo twitter'/>
                    <img className="logo-rede-sociais" src={LogoLinkedIn} alt='icone logo linkedin'/>
                    <img className="logo-rede-sociais" src={LogoGitHub} alt='icone logo github'/>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;