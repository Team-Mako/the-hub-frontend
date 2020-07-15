import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Headers from './components/Headers';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import Category from './pages/CategoryFront';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import SinglePost from './pages/SinglePost';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProjects from './pages/Dashboard/MyProjects';
import Favourites from './pages/Dashboard/Favourites';
import Insights from './pages/Dashboard/Insights';
import CreateProject from './pages/Dashboard/CreateProject';
import AdminLogin from './pages/Admin/Login';
import AdminHome from './pages/Admin/Home';
import AdminCategories from './pages/Admin/Categories';
import AdminCreateCategory from './pages/Admin/Categories/Create';
import api from './services/api';

function Routes({ auth }) {
  api.defaults.headers.Authorization = `Bearer ${auth.token}`;

  return (
    <Switch>
      <Route path="/" exact>
        <Headers searchBar={false} />
        <Home />
        <SiteFooter />
      </Route>
      <Route path="/category/:slug" exact>
        <Headers searchBar />
        <Category />
        <SiteFooter />
      </Route>
      <Route path="/contact" exact>
        <Headers searchBar />
        <Contact />
        <SiteFooter />
      </Route>
      <Route path="/DIY/:slug" exact>
        <Headers searchBar />
        <SinglePost />
        <SiteFooter />
      </Route>
      <Route path="/about" exact>
        <Headers searchBar />
        <About />
        <SiteFooter />
      </Route>
      <Route path="/my-projects" exact isPrivate>
        <Headers searchBar />
        <MyProjects />
        <SiteFooter />
      </Route>
      <Route path="/favourites" exact isPrivate>
        <Headers searchBar />
        <Favourites />
        <SiteFooter />
      </Route>
      <Route path="/insights" exact isPrivate>
        <Headers searchBar />
        <Insights />
        <SiteFooter />
      </Route>
      <Route path="/create-project" exact isPrivate>
        <Headers searchBar />
        <CreateProject />
        <SiteFooter />
      </Route>
      <Route path="/signup" exact>
        <SignUp />
        <SiteFooter />
      </Route>
      <Route path="/signin" exact>
        <LogIn />
        <SiteFooter />
      </Route>
      <Route path="/admin" exact component={AdminLogin} />
      <Route path="/admin/home" exact isAdmin component={AdminHome} />
      <Route path="/admin/categories" exact isAdmin component={AdminCategories} />
      <Route path="/admin/create-category" exact isAdmin component={AdminCreateCategory} />
    </Switch>
  );
}

export default connect((state) => ({
  auth: state.auth,
}))(Routes);
