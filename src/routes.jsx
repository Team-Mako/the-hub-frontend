import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function Routes() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
