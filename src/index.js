import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './Home';
import Animals from './Animals';
import Details from './Details';
import Nav from './Nav';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={Nav}>
      <Route path="/" component={Home}/>
      <Route path="animals" component={Animals} />
      <Route path="animals/:name" component={Details} />
    </Route>
  </Router>
  , document.getElementById('root')
);
