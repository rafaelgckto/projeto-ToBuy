import React from 'react';

// Css (assets/css)
import '../assets/css/header.css';
import '../assets/css/style.css';

// Imagens (assets/images)
import Logo from '../assets/img/Logo Oficial.png';

export default function Header() {
    return (
        <header className="header flex-between">
            <div className="header-logo-tw flex-center">
                <img className="header-img-logo" src={Logo} alt="logo" />
            </div>
            <nav className="header-nav flex-center">
                <a className="header-a-nav" href="#">
                    <button className="header-register-btn">Sobre nós</button>
                </a>
                <a className="header-a-nav" href="#">
                    <button className="header-register-btn">Como funciona?</button>
                </a>
                <a className="header-a-nav" href="#">
                    <button className="header-register-btn">Dúvidas</button>
                </a>
                <a className="header-a-nav" href="#">
                    <button className="header-register-btn" id="register-btn">Cadastro</button>
                </a>
            </nav>
        </header>
    );
}