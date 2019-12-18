import React, { Component } from 'react';

// Componentes (components)
import NavBarUser from '../components/NavbarUser';

// Css (assets/css)
import '../assets/css/perfil.css';
import '../assets/css/style.css';

// Images
import CSharp from '../assets/img/c-sharp.png';

// SVG
import ImgProfile from '../assets/svg/Profile/user.svg';

export default class Perfil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaUsuario: [],
            nomeUsuario: '',
            telefoneUsuario: '',
            emailUsuario: '',
            senhaUsuario: ''
        }

        this.BuscarUsuario = this.BuscarUsuario.bind(this);
    }

    BuscarUsuario = () => {
        fetch('https://localhost:5001/api/usuario/tolist')
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaUsuario: data }))
            .catch(erro => console.log(erro));
    }

    AtualizarStateCampo = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    componentDidMount() {
        this.BuscarUsuario();
    }


    render() {
        console.log(this.state.listaUsuario);
        return (
            <div>
                <section id="profile-app-page" className="profile-app-page">
                    <NavBarUser />
                    <main className="profile-main">
                        <div id="profile-header" className="profile-div-header">
                            <div className="profile-div flex-around">
                                <h1 className="profile-h1-header">
                                    <span><img className="profile-img-header" src={ImgProfile} alt="Ícone de Perfil" /></span>Perfil
                                </h1>
                                <div className="profile-box-img">
                                    <img className="profile-img-account" src={CSharp} alt="Foto de Perfil" />
                                </div>
                            </div>
                        </div>
                        <form className="profile-form-data">
                            <div className="profile-form">
                                <div className="profile-form-left flex-column">
                                    <div className="profile-form-name">
                                        <label className="profile-labels">Nome</label>
                                        <input className="profile-inputs" type="text" name="nomeUsuario" />
                                    </div>
                                    <div className="profile-form-telephone">
                                        <label className="profile-labels">Telefone</label>
                                        <input className="profile-inputs" type="text" name="telefoneUsuario" />
                                    </div>
                                </div>
                                <div className="profile-form-right">
                                    <div className="profile-form-email">
                                        <label className="profile-labels">E-mail</label>
                                        <input className="profile-inputs" type="text" name="emailUsuario" />
                                    </div>
                                    <button className="profile-btns">Salvar Configurações</button>
                                </div>
                            </div>
                        </form>
                        <hr className="profile-hr" />
                        <form className="profile-form-two">
                            <h2 className="profile-change-pass">Alterar Senha</h2>
                            <div className="profile-box-down">
                                <div className="profile-down">
                                    <div className="profile-form-new">
                                        <label className="profile-labels">Nova Senha</label>
                                        <input className="profile-inputs" type="text" name="senhaUsuario" />
                                    </div>
                                    <div className="profile-form-confirm">
                                        <label className="profile-labels">Confirme a Senha</label>
                                        <input className="profile-inputs" type="text" name="confirmarSenha" />
                                    </div>
                                </div>
                            </div>
                            <button className="profile-btns">Alterar Senha</button>
                        </form>
                    </main>
                </section>
            </div>
        );
    }
}