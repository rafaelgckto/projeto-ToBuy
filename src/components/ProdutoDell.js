import React from 'react';

// import '../assets/css/style.css';

import imagemEstrela from '../assets/img/stars.png';
import ImagemNoteDell from '../assets/img/dell1.jpg';

export default function ProdutoDell() {
    return (
        <div className="product-box">
            <div className="top background-center">
                <img src={imagemEstrela} alt="" className="stars" />
                <img src={ImagemNoteDell} alt="" className="produto-imagem-note" />
                <div className="price-box">R$ 1800.00</div>
            </div>
            <div className="bottom flex-between">
                <div className="left">
                    <a href="/produto" id="product-link"><h2 className="nome-produto-dell">Dell Inspiron 5000</h2></a>
                    <p> Um aparelho mais leve e fino que a geração anterior, a linha com recursos essenciais para tarefas do dia a dia com até 10 horas de bateria.
                                        </p>
                </div>
                <div className="like flex-center">
                    <i className="fas fa-heart flex-center"></i>
                </div>
            </div>
        </div>
    )
}