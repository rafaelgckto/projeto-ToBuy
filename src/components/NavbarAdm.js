import React from 'react';
function NavbarAdm() {
    return (
        <aside className="flex-column-between" id="aside-mobile">
            <div className="top">
                <div className="logo flex-center">
                    <img src="./imgs/logo.png" alt="" />
                    <i className="fas fa-times" onclick="toggleAside()"></i>
                </div>
                <div className="icons flex-column">
                    <div className="icon-box flex-center">
                        <i className="fas fa-bullhorn" id="megaphone"></i>
                    </div>
                    <div className="icon-box flex-center">
                        <i className="fas fa-heart flex-center"></i>
                    </div>
                    <div className="icon-box flex-center">
                        <i className="far fa-handshake"></i>
                    </div>
                    <div className="icon-box flex-center">
                        <a href="lista-anuncio.html"><i className="ri-file-list-fill"></i></a>
                    </div>
                </div>
            </div>
            <div className="bottom flex-column">
                <div className="profile flex-center">
                    <div className="img-profile background-center">
                        <a href="./profile.html">
                            <div className="img-profile background-center"></div>
                        </a>
                    </div>
                </div>
                <img src="./imgs/logo-thoughtworks.png" alt="" className="thought-logo" />
            </div>
        </aside>
    );
}
export default NavbarAdm;