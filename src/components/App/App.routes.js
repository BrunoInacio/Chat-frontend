import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Info, Team, Questions, Technology, Chatbot } from '../Pages';
import { Error404 } from '../Pages/Error';

export default function Routes() {
  return (
    <div className="Routes">
        <Switch>
          <Route component={Home} exact path="/home" />

          <Route component={Questions} exact path="/questions" />

          <Route component={Technology} exact path="/tech" />
          <Route component={Info} exact path="/info" />
          <Route component={Team} exact path="/team" />

          <Route component={Chatbot} exact path="/chatbot" />

          <Route component={Error404} exact path='/404'/>

          <Redirect exact from="/" to="/home" />
          <Redirect to="/404" />
        </Switch>
    </div>
  );
}
