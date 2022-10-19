import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(//solo 1 por aplicacion
  <Provider store={store}>{/* PARA TRABAJAR CON UN UNICO STORE */}
    <BrowserRouter> {/* PARA TRABAJAR CON RUTAS */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
