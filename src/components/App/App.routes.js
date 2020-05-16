import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Info, Team, Questions, Technology, Chatbot } from '../Pages';
import { Error404 } from '../Pages/Error';

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/questions"><Questions /></Route>
        <Route exact path="/tech"><Technology /></Route>
        <Route exact path="/info"><Info /></Route>
        <Route exact path="/team"><Team /></Route>
        <Route exact path="/chatbot"><Chatbot /></Route>
        
        <Route exact path='/404'><Error404 /></Route>

        <Redirect exact from="/" to="/home" />
        <Redirect to="/404" />
      </Switch>
  );
}
