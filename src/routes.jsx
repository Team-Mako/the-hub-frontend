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
      <Route path="/category/:slug" exact>
        <Headers />
        <Category />
      </Route>
      <Route path="/contact" exact>
        <Headers />
        <Contact />
      </Route>
      <Route path="/DIY/:slug" exact>
        <Headers />
        <SinglePost />
      </Route>
      <Route path="/about" exact>
        <Headers />
        <About />
      </Route>
      <Route path="/signup" exact component={SignUp} />
      <Route path="/login" exact component={LogIn} />
    </Switch>
  );
}

export default Routes;
