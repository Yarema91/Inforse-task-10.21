import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

import App from './conponents/app';
import ErrorBoundry from './conponents/error-boundry';
import ProdstoreService from './services/prodstore-service';
import { ProdstoreServiceProvider} from './conponents/prodstore-service-context';

import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

const prodstoreService = new ProdstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ProdstoreServiceProvider value={prodstoreService}>
        <Router>
          <App />
        </Router>
      </ProdstoreServiceProvider>
    </ErrorBoundry>
  </Provider >,
  document.getElementById('root')
);

