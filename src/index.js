import React from 'react';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import './ReactotronConfig';
import Reactotron from 'reactotron-react-js';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './State/configure-store';
import { fetchCourses } from './State/actions';

const store = configureStore();
store.dispatch(fetchCourses());

render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
