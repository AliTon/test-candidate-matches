import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

import setupStore from './redux/setupStore';

const OLD_REDUX_STORE = localStorage.getItem('oldReduxState');

let REDUX_INITIAL_STATE = {};

if (OLD_REDUX_STORE) {
  REDUX_INITIAL_STATE = JSON.parse(OLD_REDUX_STORE);
}

const store = setupStore(REDUX_INITIAL_STATE);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
