import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Home, Info, Team, Questions, Technology, Chatbot } from '../Pages';
import { Error404 } from '../Pages/Error';

export default function Routes(props) {
  return (
      <Switch>
        <Route exact path="/home"><Home {...props} /></Route>
        <Route exact path="/questions"><Questions {...props} /></Route>
        <Route exact path="/tech"><Technology {...props} /></Route>
        <Route exact path="/info"><Info {...props} /></Route>
        <Route exact path="/team"><Team {...props} /></Route>
        <Route exact path="/chatbot"><Chatbot {...props} /></Route>
        
        <Route exact path='/404'><Error404 {...props} /></Route>

        <Redirect exact from="/" to="/home" />
        <Redirect to="/404" />
      </Switch>
  );
}
