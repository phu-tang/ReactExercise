import { Route } from 'react-router-dom';
import React from 'react';
import Home from '../home';
import ProgressTest from '../progress';
import ListCard from '../listCard';
import SearchQA from '../searchQA';
import ExpanableQA from '../expanableQA';

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
    <Route exact path="/test1" component={ExpanableQA} />
    <Route exact path="/test3" component={ProgressTest} />
    <Route exact path="/test2" component={ListCard} />
    <Route exact path="/test4" component={SearchQA} />
  </div>
);

export default PureLayout;
