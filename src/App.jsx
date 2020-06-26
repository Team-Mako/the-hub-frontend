import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import './sass/style.scss';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SiteHeader />
        <Routes />
        <SiteFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
