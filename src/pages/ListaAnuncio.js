import React, { Component } from 'react';
import { MDBTable, MDBTableBody, } from 'mdbreact';
import NavbarAdm from '../components/NavbarAdm';

import '../assets/css/listaAnuncio.css';
import '../assets/css/controleUsuario.css';
import '../components/NavbarAdm';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import ImagemNoteDell from '../assets/img/dell1.jpg';
import ImagemNoteApple from '../assets/img/notebook-apple.jpg';

import IconeLixeira from '../assets/img/icone-lixeira.svg';
import IconeCoracao from '../assets/img/icone-coracao.svg';
import IconeCopia from '../assets/img/icone-copia.svg';
import IconeEditar from '../assets/img/icone-editar.svg';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class ListaAnuncio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaAnuncio: [],
            listaProduto: [],
            nomeProduto: '',
        }
        this.buscarAnuncio = this.buscarAnuncio.bind(this);
        this.buscarProduto = this.buscarProduto.bind(this);
    }

    buscarAnuncio() {
        fetch('http://localhost:5000/api/anuncio/tolist')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaAnuncio: data }))
            .catch((erro) => console.log(erro));
    }

    buscarProduto() {
        fetch('http://localhost:5000/api/produto/tolist')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaProduto: data }))
            .catch((erro) => console.log(erro));
    }

    componentDidMount() {
        this.buscarAnuncio();
        this.buscarProduto();
        // this.imprimeAqui();
    }

    render() {
        return (
            <div>
                <div className='pagina-controle-usuario'>
                    <NavbarAdm />
                    <div className='controle-usuario-cadastrado'>
                        <Tabs>
                            <div className="header-controle-usuario">
                                <TabList className='titulo-'>
                                    <Tab><a>Lista de Produtos</a></Tab>
                                    <Tab><a>Lista de Anuncios</a></Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <MDBTable striped>
                                    <MDBTableBody >
                                        {
                                            this.state.listaProduto.map(function (produto) {
                                                return (
                                                    <div>
                                                        <tr className='batata' key={produto.idProduto}>
                                                            <td><img className="lista-anuncio-imagem"
                                                                src={ImagemNoteDell} alt="Imagem de um notebook cadastrado" />
                                                            </td>
                                                            <td>
                                                                <h3 className="lista-anuncio-imagem-nome">{produto.nomeProduto}</h3>
                                                            </td>
                                                            <td>
                                                                <h3 className="descricao-anuncio-lista">
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing
                                                                    elit, sed do eiusmod tempor incididunt ut
                                                                    labore et dolore magna aliqua.
                                                                </h3>
                                                            </td>
                                                            <td>
                                                                <div className="icones-lista-produto">
                                                                    <div className='lista-anuncio-icone'>
                                                                        <a href="#"><img src={IconeCopia} /></a>
                                                                        <h3>Criar a partir de produto</h3>
                                                                    </div>
                                                                    <div className='lista-anuncio-icone'>
                                                                        <a href="#"><img src={IconeEditar} /></a>
                                                                        <h3>Editar Produto</h3>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </div>
                                                )
                                            }.bind(this))
                                        }
                                    </MDBTableBody>
                                </MDBTable>
                            </TabPanel>
                            <TabPanel>
                                <MDBTable striped>
                                    <MDBTableBody>
                                        {
                                            this.state.listaProduto.map(function (produto) {
                                                return (
                                                    <div>
                                                        <tr className='batata' key={produto.idProduto}>
                                                            <td><img className="lista-anuncio-imagem"
                                                                src={ImagemNoteDell} alt="Imagem de um celular para a venda" />
                                                            </td>
                                                            <td>
                                                                <h3 className="lista-anuncio-imagem-nome">{produto.nomeProduto}</h3>
                                                            </td>
                                                            <td>
                                                                <h3 className="descricao-anuncio-lista">
                                                                    Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing
                                                                    elit, sed do eiusmod tempor incididunt ut
                                                                    labore et dolore magna aliqua.
                                                                </h3>
                                                            </td>
                                                            <td>
                                                                <div className="icones-lista-produto">
                                                                    <div className='lista-anuncio-icone'>
                                                                        <a href="#"><img src={IconeCoracao} /></a>
                                                                        <h3>Interessados</h3>
                                                                    </div>
                                                                    <div className='lista-anuncio-icone'>
                                                                        <a href="#"><img src={IconeEditar} /></a>
                                                                        <h3>Editar Anúncio</h3>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </div>
                                                )
                                            }.bind(this))
                                        }
                                    </MDBTableBody>
                                </MDBTable>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}


export default ListaAnuncio;