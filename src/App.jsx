import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import Routes from './routes';
import './sass/style.scss';
import SiteFooter from './components/SiteFooter';
import { store } from './store';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTop />
        <Routes />
        <SiteFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
