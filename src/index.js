import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { rootReducer } from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { loadCities, saveCities } from './functions';
import '@shopify/polaris/dist/styles.css';

const initialState = {
  cities: loadCities(),
  error: false,
  cityId: null,
};

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

store.subscribe(() => {
  saveCities(store.getState().cities);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
