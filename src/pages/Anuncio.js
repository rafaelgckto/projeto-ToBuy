import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBIcon, MDBBadge } from "mdbreact";
import '../assets/css/anuncio.css';
import '../assets/css/style.css';
import NavbarUser from '../components/NavbarUser';
import Axios from 'axios';

import Logo from '../assets/img/logo.png';
import fotoPerfil from '../assets/img/testImgProfile.png';
import ProdutoDell from '../components/ProdutoDell';
import ProdutoApple from '../components/ProdutoApple';

class Anuncio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAnuncio: [],
            idAnuncio: '',
            precoAnuncio: '',
            nomeAnuncio: '',
            // produto: ''
        }

        this.buscarAnuncio = this.buscarAnuncio.bind(this);
        // this.imprimeAqui = this.imprimeAqui.bind(this);
    }

    buscarAnuncio() {
        fetch('http://localhost:5000/api/anuncio/tolist')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaAnuncio: data }))
            .catch((erro) => console.log(erro));
    }

    componentDidMount() {
        this.buscarAnuncio();
        // this.imprimeAqui();
    }

    // imprimeAqui() {
    //     console.log(this.state.PrecoAnuncio);
    // }

    render() {
        return (
            <>
                <div className='alinha-anuncio'>

                    <aside className="flex-column-between" id="aside-mobile">
                        <div className="top-icones-nav">
                            <div className="top">
                                <img src={Logo} alt="" style={{ "width": "80%" }} />
                            </div>

                            <div className="icons ">
                                <div className="icon-box flex-center" onclick="toggleAside()">
                                    <a href="/anuncio"><i className="fas fa-bullhorn" id="megaphone"></i></a>
                                </div>
                                <div className="icon-box " onclick="toggleAside()">
                                    <i className="fas fa-heart flex-center"></i>
                                </div>
                                <div className="icon-box ">
                                    <i className="far fa-handshake"></i>
                                </div>
                                <div className="icon-box-logout" onclick="toggleAside()">
                                    <a href="/"><i className="fas fa-power-off"></i></a>
                                </div>
                                                          
                            </div>
                        </div>

                        <div className="bottom flex-column">
                            <div className="profile flex-center">
                                <a href="/perfil"><img src={fotoPerfil} alt="" class="profile" /></a>
                            </div>
                            {/* <img src={LogoTW} alt="" className="thought-logo" /> */}
                        </div>

                    </aside>

                    <section className="app-page">
                        <main className="flex-column main adverts">
                            <header className="app-header">
                                <div className="wrap container">
                                    <div className="title">
                                        <h1>
                                            <i className="fas fa-bullhorn" id="megaphone"></i>
                                            Anúncios
                                    </h1>
                                    </div>

                                    <div className="search">
                                        <div className="search-box flex-center">
                                            <input type="text" name="search_input" placeholder="Buscar" />
                                            <i className="fas fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </header>

                            <div className="middle-filters flex-column">
                                <div className="flex-center sort-products">
                                    <div className="wrap container">
                                        <div className="sort-box flex-center">
                                            <button className="left">
                                                Preço Máximo
                                        </button>
                                            <button className="middle">
                                                Data
                                        </button>
                                            <button className="right">
                                                Preço Mínimo
                                        </button>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className="filter-row flex-center">
                                    <div className="container wrap flex-between">
                                        <button id="grid-button">
                                            Listar <i className="fas fa-grip-horizontal"></i>
                                        </button>
                                        <button id="filter-button" onclick="toggleFilter()">
                                            <i className="fas fa-cogs"></i> Filtrar
                                    </button>
                                    </div>
                                </div> */}
                            </div>

                            <section className="products-section flex-column">
                                <ProdutoApple />
                                <ProdutoDell />
                                <ProdutoApple />
                                <ProdutoDell />
                                <ProdutoApple />
                                <ProdutoDell />
                                <ProdutoApple />
                                <ProdutoDell />
                                <ProdutoApple />
                                <ProdutoDell />
                                <ProdutoApple />
                                <ProdutoDell />
                            </section>
                        </main>
                    </section>
                </div>
            </>
        )
    }
}
export default Anuncio;