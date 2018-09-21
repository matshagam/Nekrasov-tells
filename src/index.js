import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import App from './App.jsx';
import store from './store/configureStore';

import { getBooks } from './actions/BookAction';

store.dispatch(getBooks('', ''));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
