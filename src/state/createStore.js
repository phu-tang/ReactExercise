import { applyMiddleware, createStore, compose } from 'redux';

import thunk from 'redux-thunk';
import compact from 'lodash/fp/compact';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../epic';
import history from './history';
import rootReducer from './rootReducer';
import arrayMiddleware from './middleware/arrayMiddleware';
import emptyMiddleware from './middleware/emptyMiddleware';

const epicMiddleware = createEpicMiddleware();

const enhancers = compact([
  applyMiddleware(emptyMiddleware, arrayMiddleware, thunk, epicMiddleware),
  // autoRehydrate(),
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
]);

export default () => {
  const store = createStore(rootReducer, {}, compose(...enhancers));
  epicMiddleware.run(rootEpic);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      // eslint-disable-next-line global-require
      const nextReducer = require('./rootReducer').default;
      console.log('nextReducer', nextReducer);
      store.replaceReducer(nextReducer(history));
    });
  }

  return store;
};
