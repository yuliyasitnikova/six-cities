import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {reducer} from './store/reducer';
import App from './components/app/app';
import places from './mocks/places';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

// console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App places={places} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
