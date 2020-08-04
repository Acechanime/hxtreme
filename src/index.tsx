import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './sass/global.sass';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Inicio from './views/Index/Index';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <Inicio />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
