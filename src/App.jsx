import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import './sass/style.scss';
import { store } from './store';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ScrollTop />
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default App;
