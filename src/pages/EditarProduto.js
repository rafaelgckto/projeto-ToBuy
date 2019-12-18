import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import '../assets/css/cadastroproduto.css';
import Axios from 'axios';


class EditarProduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produto: {},
            idProduto: '7',
        }
        // this.buscarProdutoId = this.buscarProdutoId.bind(this)
    }


    // GET POR ID
    buscarProdutoId = (idProduto) => {
        Axios.get('http://localhost:5000/api/produto/search/' + this.state.idProduto, {
        }).then(res => {
            this.setState({ produto: res.data })
        })
    }


    // PUT - ALTERAR PRODUTO
    // alterarProduto = (id) => {
    //     Axios.put('http://localhost:5000/api/produto/update/' + this.state.idProduto)
    //         .then(res => console.log(res.data.idProduto))
    // }

    salvarAlteracoes = (event) => {
        event.preventDefault()
        Axios.put('http://localhost:5000/api/produto/update/' + this.state.idProduto, {
            "IdProduto": this.state.idProduto,
            "NomeProduto": this.state.produto.nomeProduto,
            "ModeloProduto": this.state.produto.modeloProduto,
            "dtLancProduto": this.state.produto.dtLancProduto,
            "fkIdFabricante": this.state.produto.fkIdFabricante
        })
            .then(response => console.log(response))
            .then(() => this.buscarProdutoId())
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
    componentDidMount(){
        this.buscarProdutoId()
    }

    render() {
        return (
            <div>

                <main>

                    <h1 className="editprod-titulo">Editar Produtos</h1>

                    <form className="cadprod-edtprod-corpo" onSubmit={i => this.salvarAlteracoes(i)}>
                        <div>
                            <MDBInput
                                label="Nome do Produto"
                                outline size="lg"
                                name="nomeProduto"
                                value={this.state.produto.nomeProduto}
                                onChange={this.atualizaState}
                            />
                            <MDBInput
                                label="Modelo do Produto"
                                outline size="lg"
                                name="modeloProduto"
                                value={this.state.produto.modeloProduto}
                                onChange={this.atualizaState}
                            />

                            <label for="LancamentoProduto">Data de Lançamento:</label>

                            <input type="datetime-local"
                                id="dtLancProduto"
                                name="dtLancProduto"
                                value={this.state.produto.dtLancProduto}
                                onChange={this.atualizaState}
                            />


                        </div>


                        <div>
                            <select className="browser-default custom-select marca"
                                name="Fk_idFabricante"
                                value={this.state.produto.Fk_idFabricante}
                                onChange={this.atualizaState}>
                                <option>Selecione a marca do produto</option>
                                <option value="1">Dell</option>
                                <option value="2">Apple</option>
                                <option value="3">Outro</option>
                            </select>
                        </div>

                        <div className="interest-box save-product">
                            <button className="interest" type="submit"> Salvar Alterções </button>
                        </div>

                    </form>
                </main>
            </div>
        )
    }
}

export default EditarProduto;