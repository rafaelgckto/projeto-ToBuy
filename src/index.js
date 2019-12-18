import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// Css
import './index.css';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from './services/Auth';

// Importação das Páginas
import App from './App';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';
import Perfil from './pages/Perfil';
import NotFound from './pages/NotFound';
import ControleUsuario from './pages/ControleUsuario';
import Interesse from './pages/Interesses';
import Anuncio from './pages/Anuncio';
import ListaAnuncio from './pages/ListaAnuncio';
import Produto from './pages/Produto';
import Duvidas from './pages/Duvidas';
import SobreNos from './pages/SobreNos';


// Import MDB
// import '@fortawesome/fontawesome-free/css/all.min.css';


// 
const PermissaoAdm = ({ component: Component }) => (
    <Route
        render={props =>
            usuarioAutenticado() && parseJwt().Role === 'Administrador' ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: 'login' }} />
                )
        }
    />
);

const PermissaoAluno = ({ component: Component }) => (
    <Route
        render={props =>
            usuarioAutenticado() && parseJwt().Role === 'Funcionário' ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: 'login' }} />
                )
        }
    />
);

// Rotas para páginas
const Rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />
                <Route path="/cadastrousuario" component={CadastroUsuario} />
                <Route path="/perfil" component={Perfil} />
                <Route path='/controleusuario' component={ControleUsuario}/>
                <Route path='/interesses' component={Interesse}/>
                <Route path='/anuncio' component={Anuncio}/>
                <Route path='/listaanuncio' component={ListaAnuncio}/>
                <Route path='/produto' component={Produto}/>
                <Route path='/duvidas' component={Duvidas}/>
                <Route path='/sobrenos' component={SobreNos}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
