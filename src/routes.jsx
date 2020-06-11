import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Home from './pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
