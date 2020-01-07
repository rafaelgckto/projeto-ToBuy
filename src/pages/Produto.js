import React, { Component } from 'react';
import NavbarUser from '../components/NavbarUser';
import "../assets/css/style.css";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { parseJwt } from '../services/Auth';

import Logo from '../assets/img/logo.png';
import fotoPerfil from '../assets/img/testImgProfile.png';



import Dell from "../assets/img/dell1.jpg"
// import MacFront from "../assets/img/mac-user-inte.jpg";
import MacLate from "../assets/img/mac02.jpg";
import MacLateE from "../assets/img/mac03.jpg";
// import Newnavbar from '../components/Newnavbar';

class Produto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProduto: [],
            nomeProduto: '',
            precoAnuncio: '',
            modeloProduto: '',
            nomeFabricante: '',
            imagem1: '',
            imagem2: '',
            idProduto: '',
            idFabricante: '',
            idImagem: '',
            idAnuncio: '',
            idInteresse: '',
            listaUsuario: [],
            // idUsuario : parseJwt().idUsuario
            idUsuario: 1252
        }
        this.dividirURL = this.dividirURL.bind(this)
    }

    async  componentDidMount() {
        await this.dividirURL()
        await this.buscarProduto()
        this.buscarFabricante()
    }

    buscarProduto() {
        let id = this.state.idProduto
        fetch('http://localhost:5000/api/anuncio/search/' + id)
            .then(resposta => resposta.json())
            .then(data => {
                this.setState({
                    nomeProduto: data.fkIdProdutoNavigation.nomeProduto,
                    precoAnuncio: data.precoAnuncio,
                    estadoConservacao: data.fkIdConservacaoNavigation.estadoConservacao,
                    idFabricante: data.fkIdProdutoNavigation.fkIdFabricante,
                    idAnuncio: data.idAnuncio
                })
                this.setState({ loading: false });
            })
            .catch(error => {
                { }
                this.setState({ loading: false })
            })

    }
    buscarFabricante() {
        setTimeout(() => {
            let idf = this.state.idFabricante
            fetch('https://localhost:5001/api/fabricante/search/' + idf)
                .then(resposta => resposta.json())
                .then(data => {
                    this.setState({
                        nomeFabricante: data.nomeFabricante
                    })
                    this.setState({ loading: false });
                }).catch(error => {
                    { }
                    this.setState({ loading: false })
                })
        }, 1000);
    }

    dividirURL() {
        var url = window.location.href
        var id = url.split('=')[1]
        this.setState({ idProduto: id })
    }

    cadastrarInteresse() {
        let interesse = {
            idUsuario: parseInt(this.state.idUsuario),
            idAnuncio: this.state.idAnuncio,
            aprovado: 'agd'
        }

        fetch('http://localhost:5000/api/interesse/insert', {
            method: 'POST',
            body: JSON.stringify(interesse),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

    render() {

        return (

            <div className="web-app">
                <div>
                <aside className="flex-column-between" id="aside-mobile">
                        <div className="top-icones-nav">
                            <div className="top">
                                <img src={Logo} alt="" style={{"width": "80%"}} />
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
                            </div>
                        </div>

                        <div className="bottom flex-column">
                            <div className="profile flex-center">
                                <a href="/perfil"><img src={fotoPerfil} alt="" class="profile"/></a>
                            </div>
                            {/* <img src={LogoTW} alt="" className="thought-logo" /> */}
                        </div>

                    </aside>
                </div>

                <section className="app-page" id="app-page-produto">
                    <main className="main-produto" id="main-produto">
                        <div className="sup flex-around">
                            <div className="img-box img-box-produto flex-center flex-column">
                                <img src={Dell} alt="" />
                                <div className="thumb-nav flex-between">
                                    <a href="#" /><img src={this.state.imagem2} width="100" alt="" />
                                    {/* <a href="#" /><img src={MacLate} width="100" alt="" />
                                    <a href="#" /><img src={MacLateE} width="100" alt="" /> */}
                                </div>
                            </div>
                            <div className="infos-box flex-center">
                                <div className="handle">
                                    <h2>Dell Inspiron 5000</h2>
                                    <h2>R$1500,00</h2>
                                    <div className="filters flex-around filters-produto">
                                        <div className="filter">
                                            <h3>Marca</h3>
                                            <div className="show-box flex-center">Dell</div>
                                        </div>
                                        <div className="filter">
                                            <h3>Condição</h3>
                                            <div className="show-box flex-center">
                                                <h3>otimo</h3>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="interest-box flex-center">
                                        <button className="interest" onClick={this.Anuncio}> <i className="fas fa-heart flex-center"></i> Tenho Interesse</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="tecnical-infos">
                            <div className="description">
                                <h3>Descrição</h3>
                                <p>
                                O novo Inspiron 500 é versátil e flexível, projetado para atender às necessidades básicas de computação com um design moderno e ultraportátil. Conta com a 8ª Geração de processadores Intel, com testes que demonstram performance superior quando comparado à 7ª Geração, possibilitando um desempenho superior na edição de vídeos 4K e quando você trabalha com várias janelas abertas ao mesmo tempo.

                                </p>
                            </div>
                            <div className="tecnical">
                                <h3>Ficha Técnica</h3>
                                <table className="uk-table uk-table-striped">
                                    <tbody>
                                        <tr>
                                            <td className="alinha-tabela-produto">Modelo</td>
                                            <td className="alinha-tabela-produto">Inspiron 14 5000 2 em 1</td>
                                        </tr>
                                        <tr>
                                            <td className="alinha-tabela-produto">Memória RAM</td>
                                            <td className="alinha-tabela-produto">8 GB</td>
                                        </tr>
                                        <tr>
                                            <td className="alinha-tabela-produto">Capacidade</td>
                                            <td className="alinha-tabela-produto">1 TB</td>
                                        </tr>
                                        <tr>
                                            <td className="alinha-tabela-produto">Processador</td>
                                            <td className="alinha-tabela-produto">Core I5</td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </main>
                </section>

            </div>
        )
    }
}

export default Produto;
