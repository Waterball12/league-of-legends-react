import React from 'react';
import ReactDOM from 'react-dom';
import Home from 'layouts/Home';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const app = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />

            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
