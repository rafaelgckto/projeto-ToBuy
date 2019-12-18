import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/sobreNos.css';

import imgSobreNos from '../assets/img/sobreNos.png';

class SobreNos extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <main class="main-sobre-nos">
                    <h1 class="sobre-nos-h1">Sobre Nós</h1>
                    <div class="sobre-nos-secao">
                        <img class="img-sobre-nos" src={imgSobreNos} alt="imagem de um grupo de trabalhadores" />
                        <h2 class="sobre-nos-h2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo in molestiae quis,
                            repellat autem quos
                            hic,voluptas itaque commodi magnam laudantium dolorem error porro. Aut labore ullam distinctio accusamus
                            aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae consequuntur delectus optio
                            voluptates minima deleniti fuga doloremque eos vitae exercitationem consectetur fugiat tempore tempora
                            fugit amet ab corrupti, numquam perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aspernatur tempore numquam minima aperiam quaerat deleniti impedit aliquam.</h2>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}
export default SobreNos;