import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/CategoryFront';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category" exact component={Category} />
    </Switch>
  );
}

export default Routes;
