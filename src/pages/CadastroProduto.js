import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import '../assets/css/cadastroproduto.css';


class CadastroProduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            produto: {
                nomeProduto: '',
                modeloProduto: '',
                dtLancProduto: '',
                Fk_idUsuario: '1',
                Fk_idFabricante: '1'
            }
        }
    }

    cadastrarProduto = (event) => {
        event.preventDefault();
        console.log("ENTROU");

        let cadproduto = {
            nomeProduto: this.state.produto.nomeProduto,
            modeloProduto: this.state.produto.modeloProduto,
            dtLancProduto: this.state.produto.dtLancProduto,
            fkIdFabricante: this.state.produto.Fk_idFabricante,
            fkIdFicha: this.state.produto.Fk_idFicha,
            fkIdUsuario: this.state.produto.Fk_idUsuario
        }

        console.log("produto " + cadproduto);

        fetch('http://localhost:5000/api/produto/insert', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cadproduto)
        })
            .then(response => {
                console.log("RESPOSTA " + response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

    atualizaState = (input) => {

        this.setState({
            produto: {
                ...this.state.produto,
                [input.target.name]: input.target.value
            }
        })
    }

    render() {
        return (
            <div>

                <main>

                    <h1 className="cadprod-titulo">Cadrastro Produto</h1>

                    <form className="cadprod-corpo" onSubmit={i => this.cadastrarProduto(i)}>

                        <div>

                            <MDBInput
                                label="Nome do Produto"
                                outline size="lg"
                                name="nomeProduto"
                                value={this.state.nomeProduto}
                                onChange={this.atualizaState}

                            />

                            <MDBInput
                                label="Modelo do Produto"
                                outline size="lg"
                                name="modeloProduto"
                                value={this.state.modeloProduto}
                                onChange={this.atualizaState}


                            />

                            <label className="data" for="LancamentoProduto">Data de Lançamento:</label>

                            <input type="datetime-local" 
                            id="dtLancProduto"
                            name="dtLancProduto" 
                            value={this.state.dtLancProduto}
                            onChange={this.atualizaState}
                            />


                        </div>

                    
                        <div> 
                            <p>Marca/Fabricante</p>
                            <select className="browser-default custom-select marca"
                                name="Fk_idFabricante"
                                value={this.state.Fk_idFabricante}
                                onChange={this.atualizaState}>
                                <option>Selecione a marca do produto</option>
                                <option value="1">Dell</option>
                                <option value="2">Apple</option>
                                <option value="3">Outro</option>
                            </select>
                        </div>

                        <div className="interest-box save-product">
                            <button className="interest" type="submit"> Salvar Produto </button>
                        </div>

                    </form>
                </main>
            </div>
        )
    }
}

export default CadastroProduto;