import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import Login from './app.jsx';
import Home from '../components/home.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './auth.js';
import PrivateRoute from './privateRoute.js';

render(
    <AuthProvider>
        <Router>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </Router>
    </AuthProvider>,
    document.getElementById("store")
)