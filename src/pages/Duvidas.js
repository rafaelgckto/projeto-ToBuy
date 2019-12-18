import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/duvidas.css';

import '../assets/js/script';

class Duvidas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <h1 className="duvida-h1 ">Dúvidas</h1>

                    <div className="accordionWrapper">
                        <div className="accordionItem close">
                            <h2 className="accordionItemHeading">A minha compra é garantida?</h2>
                            <div className="accordionItemContent">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem consectetur odit
                                    recusandae modi, assumenda voluptate eos dolores veniam voluptates? Ea ullam doloribus vel rem
                        nostrum.</p>
                            </div>
                        </div>

                        <div className="accordionItem close">
                            <h2 className="accordionItemHeading">Quais as formas de pagamento?</h2>
                            <div className="accordionItemContent">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem consectetur odit
                                    recusandae modi, assumenda voluptate eos dolores veniam voluptates? Ea ullam doloribus vel rem
                        nostrum.</p>
                            </div>
                        </div>

                        <div className="accordionItem close">
                            <h2 className="accordionItemHeading">Como o produto será entregue?</h2>
                            <div className="accordionItemContent">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolorem consectetur odit
                                    recusandae modi, assumenda voluptate eos dolores veniam voluptates? Ea ullam doloribus vel rem
                        nostrum.</p>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}


export default Duvidas;