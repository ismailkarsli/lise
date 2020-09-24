import React from 'react';
import ReactDOM from 'react-dom';

import './styles/tailwind.css';
import "./styles/main.css"

import AppRouter from './routes/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root'),
);

/* 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();
*/