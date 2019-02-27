import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './state/createStore';
import history from './state/history';
import App from './App';

const store = createStore();

ReactDOM.render(
  <App store={store} history={history} />,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line
    console.log('App hot reloaded');
    // eslint-disable-next-line global-require
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp store={store} history={history} />,
      document.getElementById('root'),
    );
  });
}
