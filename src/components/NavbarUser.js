import React, { Component } from 'react';

// Css (assets/css)
import '../assets/css/navbar-user.css';
import '../assets/css/style.css';

// Imagens (assets/img)
import Logo from '../assets/img/logo.png';
import LogoTW from '../assets/img/logo-thoughtworks.png';
import CSharp from '../assets/img/c-sharp.png';

// Scalable Vector Graphics - .SVG (assets/svg)
import Megaphone from '../assets/svg/NavBarUser/megaphone-icon.svg';
import Heart from '../assets/svg/NavBarUser/heart-icon.svg';
import HandShake from '../assets/svg/NavBarUser/handshake-icon.svg';
import LogOut from '../assets/svg/NavBarUser/logout-icon.svg';

// JS
import {
    toggleMegaphone,
    toggleHamburguer,
    toggleAside
} from '../assets/js/script.js';

export default class NavBarUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() { }

    Megaphone = () => {
        toggleMegaphone();
    }

    Hamburguer = () => {
        toggleHamburguer();
        toggleAside();
    }

    render() {
        return (
            <div>
                <div className="dark-modal flex-center" id="dark-modal"></div>
                <aside id="aside-desktop" className="aside-main">
                    <nav id="hidden" className="aside-nav flex-column-between hidden">
                        <div className="aside-from-above">
                            <div className="aside-logo flex-center">
                                <img className="aside-img-logo" src={Logo} alt="Logo EOL4US(End of Life for Us)" />
                            </div>
                            <div className="aside-icons">
                                <div className="aside-sup-navigation flex-center">
                                    <a className="aside-a-icons megaphone-a flex-center" href="#">
                                        <img id="megaphone" className="aside-icons-box" src={Megaphone} alt="Aba de Anúncios" />
                                        <div className="aside-text-icons aside-box-icons megaphone-text">Anúncios</div>
                                    </a>
                                </div>
                                <div className="aside-sup-navigation flex-center">
                                    <a className="aside-a-icons heart-a flex-center" href="#">
                                        <img className="aside-icons-box" src={Heart} alt="Aba de Seus Interesses" />
                                        <div className="aside-text-icons aside-box-icons heart-text">Lista de Interesses</div>
                                    </a>
                                </div>
                                <div className="aside-sup-navigation flex-center">
                                    <a className="aside-a-icons hand-shake-a flex-center" href="#">
                                        <img className="aside-icons-box" src={HandShake} alt="Aba de Compras realizadas" />
                                        <div className="aside-text-icons aside-box-icons hand-shake-text">Compras Efetuadas</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="aside-under">
                            <div className="aside-logout aside-bottom-navigation flex-center">
                                <a className="aside-a-btn logout-link flex-center" href="#">
                                    <img className="aside-img-logout" src={LogOut} alt="Efetuar o logout da conta" />
                                    <div className="aside-text-logout logout-text aside-box-logout">Logout</div>
                                </a>
                            </div>
                            <div className="aside-profile aside-bottom-navigation flex-center">
                                <a className="aside-a-btn profile-link flex-center" href="#">
                                    <img className="aside-img-profile" src={CSharp} alt="Página de perfil do usuário" />
                                    <div className="aside-text-logout profile-text aside-box-logout">Perfil</div>
                                </a>
                                <img className="aside-img-logoTW" src={LogoTW} alt="Logo da ToughtWorks" />
                            </div>
                        </div>
                    </nav>
                </aside>
                <nav id="nav-mobile" className="nav-mobile flex-center">
                    <div className="nav-container flex-between">
                        <div id="nav-hamburguer" className="nav-hamburger-menu" onClick={this.Hamburguer.bind(this)}>
                            <div className="nav-line nav-line-0"></div>
                            <div className="nav-line nav-line-1"></div>
                            <div className="nav-line nav-line-2"></div>
                        </div>

                        {/* https://codepen.io/designcouch/pen/Atyop */}

                        <img className="nav-logo" src={Logo} alt="Logo End Of Life for Us" />
                        <img className="nav-profile" src={CSharp} alt="Logo de Perfil" />
                    </div>
                </nav>
            </div>
        );
    }
}