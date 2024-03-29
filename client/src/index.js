import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';

import store from './Redux/store/stores';
import {BrowserRouter} from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);


