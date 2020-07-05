import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/CategoryFront';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import SinglePost from './pages/SinglePost';
import Headers from './components/Headers';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Headers />
        <Home />
      </Route>
      <Route path="/category" exact>
        <Headers />
        <Category />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/login" exact>
        <LogIn />
      </Route>
      <Route path="/single-post" exact>
        <Headers />
        <SinglePost />
      </Route>
    </Switch>
  );
}

export default Routes;
