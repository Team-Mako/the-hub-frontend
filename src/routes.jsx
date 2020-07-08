import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './pages/Home';
import Category from './pages/CategoryFront';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import SinglePost from './pages/SinglePost';
import About from './pages/About';
import Headers from './components/Headers';
import Contact from './pages/Contact';
import api from './services/api';

function Routes({ auth }) {
  api.defaults.headers.Authorization = `Bearer ${auth.token}`;

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
        {!auth.session ? <Redirect to="/" /> : (
          <>
            <Headers />
            <Contact />
          </>
        )}
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

export default connect((state) => ({
  auth: state.auth,
}))(Routes);
