import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import NavbarAdm from '../components/NavbarAdm';

import '../assets/css/controleUsuario.css';
import '../components/NavbarAdm';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import IconeLixeira from '../assets/img/delete-icone.png'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import NavbarUser from '../components/NavbarUser';

class ControleUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUsuario: [],
            listaAtivos: [],
            emailUsuario: '',
            nomeUsuario: '',
            statusUsuario: '',
            usuarioBuscado: {}
        }
        this.buscarUsuario = this.buscarUsuario.bind(this);
        this.SetarAtivo = this.SetarAtivo.bind(this)
    }

    buscarUsuario() {
        fetch('http://localhost:5000/api/usuario/tolist')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaUsuario: data }))
            .catch((erro) => console.log(erro));


        console.log(this.state.listaUsuario)
    }
    async SetarAtivo(id) {

        await this.buscarUsuarioPorId(id);
        console.log(this.state.usuarioBuscado)
        fetch('http://localhost:5000/api/usuario/update/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                idUsuario: this.state.usuarioBuscado.idUsuario,
                nomeUsuario: this.state.usuarioBuscado.nomeUsuario,
                senhaUsuario: this.state.usuarioBuscado.senhaUsuario,
                emailUsuario: this.state.usuarioBuscado.emailUsuario,
                statusUsuario: 'true',
                FkIdTipoUsuario: 2
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(res => this.buscarUsuario(), alert('O usuario '+this.state.usuarioBuscado.emailUsuario+' foi ativado com sucesso'))
            .catch(error => console.log(error))
    }

    async buscarUsuarioPorId(id) {
        await fetch('http://localhost:5000/api/usuario/search/' + id)
            .then(resposta => resposta.json())
            .then(data => this.setState({ usuarioBuscado: data }))
            .catch((erro) => console.log(erro));
    }

    async componentDidMount() {
        await this.buscarUsuario()
    }

    render() {
        return (
            <div>
                <div className='pagina-controle-usuario'>
                    {/* <NavbarUser /> */}
                    <div className='controle-usuario-cadastrado'>
                        <Tabs>
                            <div className="header-controle-usuario">
                                <TabList className='titulo-cadastro-usuario'>
                                    <Tab><a>Cadastrados</a></Tab>
                                    <Tab><a>Aguardando Aprovação</a></Tab>
                                </TabList>
                            </div>
                            <TabPanel>
                                <MDBTable striped>
                                    <MDBTableHead>
                                        <tr>
                                            <th>E-mail</th>
                                            <th>Status</th>
                                            <th>Excluir</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        {
                                            this.state.listaUsuario.map(usuario => {
                                                return (
                                                    usuario.statusUsuario == true ? (
                                                        <div className='conteudo-lista-usuario-ativo'>
                                                            <tr key={usuario.idUsuario}>
                                                                <td>{usuario.emailUsuario}</td>
                                                                <td>{usuario.statusUsuario == 0 ? 'Inativo' : 'Ativo'}</td>
                                                                <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td>
                                                            </tr>
                                                        </div>
                                                    )
                                                        : (
                                                            <div></div>
                                                        )
                                                )
                                            })}
                                    </MDBTableBody>
                                </MDBTable>
                            </TabPanel>
                            <div className='controle-usuario-aguardando'>
                                <TabPanel>
                                    <MDBTable striped>
                                        <MDBTableHead>
                                            <tr>
                                                <th>E-mail</th>
                                                <th>Status</th>
                                                <th>Confirmação</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {
                                                this.state.listaUsuario.map(usuario => {
                                                    return (
                                                        usuario.statusUsuario === false ? (
                                                            <div className='conteudo-lista-usuario-ativo'>
                                                                <tr key={usuario.idUsuario}>
                                                                    <td>{usuario.emailUsuario}</td>
                                                                    <td>Inativo</td>
                                                                    {/* <td><a href='#'> <img className='icone-excluir-usuario' src={IconeLixeira} /></a></td> */}
                                                                <MDBBtn className='lista-usuario-botao-ativar' onClick={() => this.SetarAtivo(usuario.idUsuario)} color="grey" size="sm">Ativar</MDBBtn>
                                                                </tr>
                                                            </div>
                                                        )
                                                            : (
                                                                <div></div>
                                                            )
                                                    )
                                                })}
                                        </MDBTableBody>
                                    </MDBTable>
                                </TabPanel>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}


export default ControleUsuario;