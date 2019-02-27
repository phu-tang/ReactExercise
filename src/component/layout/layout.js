import { Route } from 'react-router-dom';
import React from 'react';
import Home from '../home';

const PureLayout = () => (
  <div
    style={{
      top: 0,
      left: 0,
      position: 'absolute',
      minHeight: '100vh',
      width: '100%',
    }}
  >
    <Route exact path="/" component={Home} />
  </div>
);

export default PureLayout;
