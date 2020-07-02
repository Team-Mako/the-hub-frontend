import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import MediaQuery from 'react-responsive';
import Routes from './routes';
import './sass/style.scss';
import SiteHeader from './components/SiteHeader';
import MobileHeader from './components/MobileHeader';
import SiteFooter from './components/SiteFooter';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MediaQuery maxDeviceWidth={420}>
          <MobileHeader />
        </MediaQuery>
        <MediaQuery minDeviceWidth={420}>
          <SiteHeader />
        </MediaQuery>
        <Routes />
        <SiteFooter />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
