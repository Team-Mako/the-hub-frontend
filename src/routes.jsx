import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainNav from './components/MainNav';
import Home from './pages/Home';
import About from './pages/About';
import MainFooter from './components/MainFooter';

function Routes() {
  return (
    <BrowserRouter>
      <MainNav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" exact component={About} />
      </Switch>
      <MainFooter />
    </BrowserRouter>
  );
}

export default Routes;
