import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeContextProvider from '../src/context/Theme/themeContext';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.ir'
axios.defaults.headers.post['Contetnt-Type'] = 'application/json';



ReactDOM.render(<ThemeContextProvider><App /></ThemeContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
