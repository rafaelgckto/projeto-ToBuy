import React from 'react';
import './App.css';
import './assets/css/style.css';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import ImagemBanner from '../src/assets/img/Imagem banner.png';

function App() {
    return (
        <div className="App">
            <Cabecalho />
            <main class="main-home-eol flex-center-main">
                <section class="home-eol flex-center">
                    <img className="Imagem-banner.png" src={ImagemBanner} />
                    <div class="flex-column entrar">
                        <div class="text-home-eol">
                            <h1 className='h1-menu-eol'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1>
                            <p className='p-menu-eol'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quos, temporibus! Consequuntur nesciunt laboriosam a voluptatum, at provident
                                iste reprehenderit, sed soluta dolores illo recusandae omnis ex alias! Quaerat, adipisci aut!
                            </p>
                        </div>
                        <a href="./login"><button class="btn-entrar-eol">Entrar</button></a>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    );
}

export default App;
