import { BrowserRouter } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/index.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
