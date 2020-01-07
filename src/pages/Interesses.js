import React, { Component } from 'react';
import { MDBTable, MDBTableBody } from 'mdbreact';
import NavbarAdm from '../components/NavbarAdm';

import '../components/NavbarAdm';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../assets/css/interesses.css';

import IconeData from '../assets/img/icone-calendario.svg';
import IconeMail from '../assets/img/icone-mail.svg';
import IconeCheck from '../assets/img/icone-check.svg';

import ImagemUsuario from '../assets/img/profile-small.jpg';

class Interesse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaInteresse: [],
            idInteresse: '',
            dataInteresse: '',
            fkIdUsuario: '',
            nomeUsuario: '',
        }
        this.buscarInteresse = this.buscarInteresse.bind(this);
    }
    buscarInteresse() {
        fetch('http://localhost:5000/api/usuario/tolist')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaInteresse: data }))
            .catch((erro) => console.log(erro));


        console.log(this.state.listaInteresse)
    }

    async componentDidMount() {
        await this.buscarInteresse()
    }

    render() {
        return (
            <div>
                <div className='pagina-interesse'>
                    <NavbarAdm />
                    <div className='pagina-interesse-conteudo'>
                        <div className="titulo-interesse-h2">
                            <h2>Interessados</h2>
                        </div>
                        <MDBTable striped>
                            <MDBTableBody>
                                {
                                    this.state.listaInteresse.map(Interesse => {
                                        return (
                                            <div className='tabela-interesse-usuario'>
                                                <tr key={Interesse.idInteresse}>
                                                    <td className="flex-around interesse-nome-e-email">
                                                        <img className="interesse-imagem-perfil"
                                                            src={ImagemUsuario} alt="Imagem de um usuario" />
                                                        <td>
                                                            <h3 className="interesse-nome-usuario">{Interesse.nomeUsuario}</h3>
                                                        </td>
                                                        <td>
                                                            <h3 className="interesse-email-usuario">{Interesse.emailUsuario}</h3>
                                                        </td>
                                                        <tbody id="tabela-lista-corpo">
                                                        </tbody>
                                                    </td>
                                                    <td>
                                                        <div className="flex-around">
                                                            <div className="icones-lista-interesse-box flex-column">
                                                                <img className='icones-interesse-size' src={IconeData} />
                                                                <h3>{Interesse.dataInteresse}</h3>
                                                            </div>
                                                            <div className="icones-lista-interesse-box flex-column">
                                                                <a href='#'> <img className='icones-interesse-size' src={IconeMail} /> </a>
                                                                <h3>Entrar em contato</h3>
                                                            </div>
                                                            <div className="icones-lista-interesse-box flex-column">
                                                                <a href='#'> <img className='icones-interesse-size' src={IconeCheck} /></a>
                                                                <h3>Finalizar</h3>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                
                                             </div>
                                        )
                                    })
                                }
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </div>
            </div>
        )
    }
}
export default Interesse;