import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/CategoryFront';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

function Routes() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/category" exact component={Category} />
      </Switch>
      <SiteFooter />
    </BrowserRouter>
  );
}

export default Routes;
