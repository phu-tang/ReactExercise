import { Route } from 'react-router-dom';
import React from 'react';
import Home from '../home';
import ProgressTest from '../progress';
import ListCard from '../listCard';

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
    <Route exact path="/test3" component={ProgressTest} />
    <Route exact path="/test2" component={ListCard} />
  </div>
);

export default PureLayout;
