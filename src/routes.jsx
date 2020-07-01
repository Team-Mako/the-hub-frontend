import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/CategoryFront/index';
import Signup from './pages/SignUp/Index';
import Login from './pages/LogIn/Index';
import SinglePost from './pages/SinglePost/index';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category" exact component={Category} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/single-post" exact component={SinglePost} />
    </Switch>
  );
}

export default Routes;
