import React, { Component } from 'react';
import NavbarUser from '../components/NavbarUser';
import "../assets/css/style.css";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { parseJwt } from '../services/Auth';




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
            idUsuario : parseJwt().idUsuario
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
        fetch('http://localhost:5000/api/anuncio/search/'+id)
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

    cadastrarInteresse(){
        let interesse = {
            idUsuario : parseInt(this.state.idUsuario),
            idAnuncio : this.state.idAnuncio,
            aprovado : 'agd'
        }
  
        fetch('http://localhost:5000/api/interesse/insert',{
            method : 'POST',
            body : JSON.stringify(interesse) ,           
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
            <div>
              
                <body class="web-app">
                   
                    <section class="app-page" id="app-page-produto">
                        <main class="main-produto" id="main-produto">
                            <div class="sup flex-around">
                                <div class="img-box img-box-produto flex-center flex-column">
                                    <img src={Dell} alt="" />
                                    <div class="thumb-nav flex-between">
                                        <a href="#" /><img src={this.state.imagem2} width="100" alt="" />
                                        {/* <a href="#" /><img src={MacLate} width="100" alt="" />
                                        <a href="#" /><img src={MacLateE} width="100" alt="" /> */}
                                    </div>
                                </div>
                                <div class="infos-box flex-center">
                                    <div class="handle">
                                        <h2>{this.state.nomeProduto}</h2>
                                        <h2>R${this.state.precoAnuncio},00</h2>
                                        <div class="filters flex-around filters-produto">
                                            <div class="filter">
                                                <h3>Marca</h3>
                                                <div class="show-box flex-center">{this.state.nomeFabricante}</div>
                                            </div>
                                            <div class="filter">
                                                <h3>Condição</h3>
                                                <div class="show-box flex-center">
                                                    <h3>{this.state.estadoConservacao}</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="interest-box flex-center">
                                            <button class="interest" onClick={this.Anuncio}> <i class="fas fa-heart flex-center"></i> Tenho Interesse</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="tecnical-infos">
                                <div class="description">
                                    <h3>Descrição</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia exercitationem similique sit eum,
                                        earum et consectetur consequatur inventore minus veniam laborum accusantium! Vel quos debitis
                                        quasi nostrum animi consequatur minima.
                                    </p>
                                </div>

                            </div>
                        </main>
                    </section>

                </body>
            </div>
        )
    }
}

export default Produto;
