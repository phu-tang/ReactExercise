import { Provider } from 'react-redux';
import React from 'react';
import Layout from './component/layout';

const App = ({ store }) => (
  <Provider store={store}>
    <div name="application">
      <Layout />
    </div>
  </Provider>
);

export default App;
