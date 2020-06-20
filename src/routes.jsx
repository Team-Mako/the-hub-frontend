import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/sign-up" exact component={SignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
