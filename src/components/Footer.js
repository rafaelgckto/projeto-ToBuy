import React from 'react';

// Css (assets/css)
import '../assets/css/footer.css';
import '../assets/css/style.css';

// Imagens (assets/img)
import LogoThoughtWorks from '../assets/img/logo-thoughtworks.png';

// Scalable Vector Graphics - .SVG (assets/svg)
import LogoFacebook from '../assets/svg/Footer/facebook-logo.svg';
import LogoInstagram from '../assets/svg/Footer/instagram-logo.svg';
import LogoTwitter from '../assets/svg/Footer/twitter-logo.svg';
import LogoLinkedIn from '../assets/svg/Footer/linkedin-logo.svg';
import LogoGitHub from '../assets/svg/Footer/github-logo.svg';

export default function Footer() {
    return (
        <footer className="footer-home flex-between">
            <img className="footer-logo-tw flex-between" src={LogoThoughtWorks} alt="" />
            <div className="footer-links flex-center">
                <div className="footer-icons flex-around">
                    <img className="footer-logo-rede-sociais" src={LogoFacebook} />
                    <img className="footer-logo-rede-sociais" src={LogoInstagram} />
                    <img className="footer-logo-rede-sociais" src={LogoTwitter} />
                    <img className="footer-logo-rede-sociais" src={LogoLinkedIn} />
                    <img className="footer-logo-rede-sociais" src={LogoGitHub} />
                </div>
            </div>
        </footer>
    );
}