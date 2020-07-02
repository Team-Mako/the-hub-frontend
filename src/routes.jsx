import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/CategoryFront';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import SinglePost from './pages/SinglePost';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/category" exact component={Category} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={LogIn} />
      <Route path="/single-post" exact component={SinglePost} />
    </Switch>
  );
}

export default Routes;
