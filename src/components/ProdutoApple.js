import React from 'react';

// import '../assets/css/style.css';

import imagemEstrela from '../assets/img/stars.png';
import ImagemNoteApple from '../assets/img/notebook-apple.jpg';

export default function ProdutoApple() {
    return (
        <div className="product-box">
            <div className="top background-center">
                <img src={imagemEstrela} alt="" className="stars" />
                <img src={ImagemNoteApple} alt="" className="produto-imagem-note" />
                <div className="price-box">R$ 2000.00</div>
            </div>
            <div className="bottom flex-between">
                <div className="left">
                    <a href="/produto" id="product-link"><h2>Macbook Pro</h2></a>
                    <p>Com recursos como processadores e memória de alto desempenho, chips gráficos avançados e armazenamento rápido, todas as suas ideias ganham fôlego para ir muito mais longe.
                                        </p>
                </div>
                <div className="like flex-center">
                    <i className="fas fa-heart flex-center"></i>
                </div>
            </div>
        </div>
    )
}