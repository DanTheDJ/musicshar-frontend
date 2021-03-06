import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './style.css';

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App></App>, document.getElementById('container'));

serviceWorker.register();