import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom";

import "../node_modules/bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";

ReactDOM.render(
  <>

    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </>,

  document.getElementById('root')
);

