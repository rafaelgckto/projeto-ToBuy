import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

// Componentes (components)
import Cabecalho from '../components/Header';
import Rodape from '../components/Footer';

// Css (assets/css)
import '../assets/css/cadastro-usuario.css';
import '../assets/css/style.css';

// Imagens (assets/images)
import Logo from '../assets/img/Logo Oficial.png';

export default class CadastroUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUsuario: [],
            nomeUsuario: '',
            emailUsuario: '',
            senhaUsuario: '',
            confirmarSenha: '',
            telefoneUsuario: '',
            fkIdTipoUsuario: 2,
            erroMensagem: '',
            listaTipoUsuario: []
        }

        this.CadastrarUsuario = this.CadastrarUsuario.bind(this);
        this.AtualizarStateCampo = this.AtualizarStateCampo.bind(this);
        // this.BuscarTipoUsuario = this.BuscarTipoUsuario.bind(this);
    }

    CadastrarUsuario = (event) => {
        event.preventDefault();

        fetch('https://localhost:5001/api/usuario/insert', {
            method: 'POST',
            body: JSON.stringify({
                nomeUsuario: this.state.nomeUsuario,
                emailUsuario: this.state.emailUsuario,
                senhaUsuario: this.state.senhaUsuario,
                telefoneUsuario: this.state.telefoneUsuario,
                fkIdTipoUsuario: this.state.fkIdTipoUsuario
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then(resposta => {
                if (resposta.status === 200) {
                    console.log("Usuario cadastrado com sucesso!");
                }
            })
            .catch(erro => { console.log(erro) });
    }

    AtualizarStateCampo = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    // BuscarTipoUsuario = () => {
    //     fetch('https://localhost:5001/api/tipousuario/tolist')
    //         .then(resposta => { resposta.json() })
    //         .then(data => { this.setState({ listaTipoUsuario: data }) })
    //         .catch(erro => { console.log(erro) });
    // }

    componentDidMount() {
        // this.BuscarTipoUsuario();
    }

    render() {
        return (
            <div>
                <Cabecalho />

                <main className="register-user-main flex-center">
                    <section className="register-card-box">
                        <div className="register-div-box flex-column">
                            <h2 className="register-h2">Cadastre-se</h2>
                            <p className="register-p">Faça o cadastro no <span><img className="register-img-logo img-logo-cad" src={Logo} alt="logo" /></span></p>
                            <form className="register-form-box flex-column" onSubmit={this.CadastrarUsuario}>
                                <input className="register-input"
                                    type="text"
                                    name="nomeUsuario"
                                    placeholder="Nome"
                                    value={this.state.nomeUsuario}
                                    onChange={this.AtualizarStateCampo} />
                                <input className="register-input"
                                    type="text"
                                    name="emailUsuario"
                                    placeholder="E-mail corporativo"
                                    value={this.state.emailUsuario}
                                    onChange={this.AtualizarStateCampo} />
                                <input className="register-input"
                                    type="text"
                                    name="senhaUsuario"
                                    placeholder="Senha"
                                    value={this.state.senhaUsuario}
                                    onChange={this.AtualizarStateCampo} />
                                <input className="register-input"
                                    type="text"
                                    name="confirmarSenha"
                                    placeholder="Confirmação de senha"
                                    value={this.state.confirmarSenha}
                                    onChange={this.AtualizarStateCampo} />
                                <input className="register-input"
                                    type="text"
                                    name="telefoneUsuario"
                                    placeholder="Telefone"
                                    value={this.state.telefoneUsuario}
                                    onChange={this.AtualizarStateCampo} />
                                <button className="register-color register-btn">Cadastre-se</button>
                            </form>
                            <p className="register-p-footer">Já possui uma conta?</p>
                            <Link className="register-a-login register-link-login" onClick={() => { this.props.history.push('/login') }}>Entrar</Link>
                        </div>
                    </section>
                </main>

                <Rodape />
            </div>
        );
    }
}