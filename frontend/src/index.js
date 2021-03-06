import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './js/components/App/App.jsx';
import './css/index.css';
import configureStore from './js/store/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);