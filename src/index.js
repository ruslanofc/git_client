import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
//import { ReactComponent } from '*.svg';


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
