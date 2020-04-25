import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Navigation from '../Navigation';
import Home from '../Pages/Home';
import Error404 from '../Pages/Error404';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navigation />

      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Home} path="/home" />

          <Route component={Error404}/>
        </Switch>
      </Router>
    </div>
  );
}
