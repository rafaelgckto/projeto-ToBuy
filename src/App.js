import React from 'react';
import './App.css';
import './assets/css/style.css';
import './assets/css/home.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ImagemBanner from '../src/assets/img/Imagem banner.png';

function App() {
    return (
        <div className="App page-main">
            <Header />
            <main className="main-home-eol flex-center-main">
                <section className="home-eol">
                    <img className="Imagem-banner.png" src={ImagemBanner} />
                    <div className="flex-column entrar">
                        <div className="text-home-eol">
                            <h1 className='h1-menu-eol'>Bem vindo à plataforma END OF LIFE FOR US! </h1>
                            <p className='p-menu-eol'>
                                Aqui você pode conferir e demonstrar interesse nos equipamentos que entraram no prazo de fim da vida útil na Thoughtworks.
                            </p>
                        </div>
                        <a href="./login"><button className="btn-entrar-eol">Entrar</button></a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
