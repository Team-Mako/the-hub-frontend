import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/CategoryFront';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import SinglePost from './pages/SinglePost';
import About from './pages/About';
import Headers from './components/Headers';
import Contact from './pages/Contact';

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
      <Route path="/contact" exact>
        <Headers />
        <Contact />
      </Route>
      <Route path="/single-post" exact>
        <Headers />
        <SinglePost />
      </Route>
      <Route path="/about" exact component={About} />
    </Switch>
  );
}

export default Routes;
