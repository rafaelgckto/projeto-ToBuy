import React, {Component} from 'react';
import '../assets/css/padrao.css';
import '../assets/css/cadastroanuncio.css';

class EditarProduto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anuncio: {},
            idAnuncio: '7',
        }
        // this.buscarProdutoId = this.buscarProdutoId.bind(this)
    }

    


    // GET POR IDAnuncio
    buscarAnuncioId = (idAnuncio) => {
        Axios.get('http://localhost:5000/api/produto/search/' + this.state.idAnuncio, {
        }).then(res => {
            this.setState({ anuncio: res.data })
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
            "IdProduto": this.state.idAnuncio,
            "precoAnuncio": this.state.anuncio.precoAnuncio,
            "descAnuncio": this.state.anuncio.descAnuncio,
            "dt_finalAnuncio": this.state.anuncio.dt_finalAnuncio,
            "FK_idConservacao:": this.state.anuncio.FK_idConservacao
        })
            .then(response => console.log(response))
            .then(() => this.buscarProdutoId())
    }


    atualizaState = (input) => {
        this.setState({
            anuncio: {
                ...this.state.anuncio,
                [input.target.name]: input.target.value
            }
        })
        console.log(input.target.value)
    }
    componentDidMount(){
        this.buscarAnuncioId()
    }

    
    
    render(){
        return(
            <div>
            <CabecalhoAdm/>
            <main>
        <section className="titulo_cad_produto">
       
            <hr/>
        </section>
        <div className="container_cad_produto">
            
            <section className="form_cadastro">
                <form onSubmit={this.cadastraProduto} className="formulario">

                    <section className="container_form_cad_produto">

                        <section className="row_cad_produto">
                            <div>
                                <label for="nome"><i className="fas fa-desktop"></i>Nome do equipamento</label>
                                <input
                                type="text" 
                                id="input_box" 
                                name="nomeProduto" 
                                placeholder="Nome..."
                                value={this.state.nomeProduto}
                                onChange={this.atualizaState}
                                />
                               
                            </div>
                            <div>
                                <label for="modelo"><i className="far fa-keyboard"></i> Modelo do equipamento</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="modelo" 
                                placeholder="Modelo..."
                                value={this.state.modelo}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>

                        <section className="row_cad_produto">
                            <div>
                                <label for="marca"><i className="fas fa-industry"></i> Fabricante do equipamento</label>
                                <select
                                    name="marca"
                                    value={this.state.marca}
                                    onChange={this.atualizaState}
                                    >
                                    <option value="">Selecione uma marca</option>
                                    {
                                        this.state.listamarca.map(function(marca){
                                            return <option key={marca.idMarca} value={marca.idMarca}>{marca.nomeMarca}</option>
                                        })
                                    }   
                                </select>
                                                        
                                 
                            </div>
                            <div>
                                <label for="procecssador"><i className="fas fa-gopuram"></i>Processador</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="processador" 
                                placeholder="Precessador..."
                                value={this.state.processador}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>

                        <section className="row_cad_produto">
                            <div>
                                <label for="lancamento"><i className="far fa-calendar-alt"></i> Data de lançamento</label>
                                <input 
                                type="date" 
                                id="input_box" 
                                name="dataLancamento" 
                                placeholder="Data de lançamento..."
                                value={this.state.dataLancamento}
                                onChange={this.atualizaState}
                                />
                                

                            </div>
                            <div>
                                <label for="codigoIdentificacao"><i className="fas fa-qrcode"></i> Codigo de identificação</label>
                                <input 
                                type="text" 
                                id="input_box" 
                                name="codIdentificacao" 
                                placeholder="Identificação..."
                                value={this.state.codIdentificacao}
                                onChange={this.atualizaState}
                                />
                                
                            </div>
                        </section>
                        <section className="descricao_cad_produto">
                        <label for="descricao"><i className="fas fa-desktop"></i>Descrição do equipamento</label>
                        <textarea 
                        name="descricao" 
                        cols="30" 
                        rows="10"
                        placeholder="Descrição..."
                        value={this.state.descricao}
                        onChange={this.atualizaState.bind(this)}
                        />
                        </section>

                    <div className="botao_cad_produto">
                            <button type="submit" className="bot_cad_cadastrar">
                            <i className="fas fa-plus-circle"></i> Adicionar produto
                        </button>
                    </div>

                    </section>
                </form>
            </section>
        </div>
    </main>
            <Rodape/>
            </div>
        );
    }
}
export default CadastroProduto;