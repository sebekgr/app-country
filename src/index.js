import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes';
import './country.css';
import './reset.css';

ReactDOM.render(
    <Provider store={store} >
        <Routes />
    </Provider>, document.querySelector("#root")
);