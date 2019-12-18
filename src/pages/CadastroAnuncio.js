
import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import '../assets/css/cadastroanuncio.css';
import axios from 'axios';

const axiosInstanci = axios.create({ baseURL: 'http://localhost:5000/api', timeout: 1000, headers: { 'X-Custom-Header': 'foobar' } });


class CriarAnuncio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            produto: {
                idProduto: '',
                FK_idConservacao: '',
                precoAnuncio: '',
                dt_finalAnuncio: '',
                descAnuncio: '',
            }
        }
    }

    buscarProdutoId = async (idProduto) => {
        const produto = await axiosInstanci.get(
            '/produto/search/' + idProduto)
        this.setState({
            ...this.state,
            produto: produto.data
        })
        console.log(this.state)
    }

    marcavalue = (idfabricante) => {
        console.log(idfabricante)
        switch (idfabricante) {
            case 1:
                return "Dell"

            case 2:
                return "Apple"

            default:
                return "Outro"
        }
    }

    atualizaState = (input) => {
        this.setState({
            produto: {
                ...this.state.produto,
                [input.target.name]: input.target.value
            }
        })
        console.log(input.target.value)
    }


    cadastra(event) {
        axios.post('http://localhost:5000/api/anuncio/inset', {
            FK_idConservacao: this.state.FK_idConservacao,
            precoAnuncio: this.state.precoAnuncio,
            dt_finalAnuncio: this.state.dtLancProduto,
            descAnuncio: this.state.descAnuncio
        })
        .then(response => console.log(response))
    }

    render() {
        return (
            <div>
                {/* <NavbarAdm/> */}

                <main>

                    <h1 className="cadprod-titulo">Cadrastro Anúncio</h1>
cl
                    <form className="cadanun-corpo" onSubmit={this.cadastrarAnuncio}>
                        <label for="avatar">Selecione a imagem do produto:</label>

                        <input className="botao" type="file"
                            id="avatar" name="avatar"
                            accept="image/png, image/jpeg" />


                        <div className="cadprod-imputs">

                            <MDBInput
                                label="Código Produto"
                                outline size="lg"
                                name="idProduto"
                                onChange={async (input) => { this.atualizaState(input); await this.buscarProdutoId(input.target.value) }}
                                value={this.state.produto.idProduto}
                            />

                            <MDBInput
                                label="Nome do Produto"
                                outline size="lg"
                                value={this.state.produto.nomeProduto}
                            // onChange={this.cadastrarEstadonomeProduto}
                            />

                            <MDBInput
                                label="Modelo do Produto"
                                outline size="lg"
                                value={this.state.produto.modeloProduto}

                            // onChange={this.cadastrarEstadomodeloProduto}
                            />

                            <MDBInput
                                label="Marca"
                                outline size="lg"
                                name="idProduto"
                                // onChange={async (input) => { this.atualizaState(input); await this.buscarProdutoId(input.target.value) }}
                                value={this.marcavalue(this.state.produto.fkIdFabricante)}
                            />

                        </div>

                        {/* Campo datas */}
                        <div className="Input Data">


                            <label for="LancamentoProduto">Data de Lançamento:</label>

                            <input type="datetime-local"
                                id="dtLancProduto"
                                name="dtLancProduto"
                                value={this.state.produto.dtLancProduto}
                            // onChange={this.atualizaState}
                            />

                            <label for="FimdeVidatoProduto"> Data do fim de vida útil:</label>

                            <input type="datetime-local"
                                id="dt_finalAnuncio"
                                name="dt_finalAnuncio"
                                value={this.state.produto}
                                onChange={this.atualizaState}
                            />


                        </div>


                        {/* Condição */}
                        <div>
                            <select className="browser-default custom-select marca"
                                name="FK_idConservacao"
                                value={this.state.produto}
                                onChange={this.atualizaState}>
                                <option>Selecione a condição do produto</option>
                                <option value="1">Ruim</option>
                                <option value="2">Bom</option>
                                <option value="3">Ótimo</option>
                            </select> 
                        </div>


                        {/* Campo Descrição */}
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">
                                <p>Descrição Produto</p>
                            </label>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="5"
                                value={this.state.produto}
                                name="descAnuncio"
                                onChange={this.atualizaState}
                            />
                        </div>

                        {/* Campo Preço */}
                        <MDBInput
                            label="Preço Produto"
                            outline size="lg"
                            name="precoAnuncio"
                           value={this.state.produto}
                           onChange={this.atualizaState}
                        />

                        {/* Botão cadastro */}
                        <div className="interest-box save-product" onSubmit={this.Cadastarproduto}>
                            <button className="interest" type="submit"> Salvar Produto </button>
                        </div>

                    </form>
                </main>
            </div>
        )
    }
}

export default CriarAnuncio;