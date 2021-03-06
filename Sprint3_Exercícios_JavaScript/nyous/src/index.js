import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import Naoencontrada from './pages/naoencontrada';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//rotas da aplicação
const routing = (
  <Router>
  <div>
    <switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/cadastrar" component={Cadastrar} />
    <Route component={Naoencontrada} />
    </switch>
    </div>
  </Router >
)

ReactDOM.render(
 routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
