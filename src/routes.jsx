import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
