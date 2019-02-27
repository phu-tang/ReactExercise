import React from 'react';
import { Link } from 'react-router-dom';
import ListQA from './listQA';

export default () => (
  <div>
    <Link to="/">Home</Link>
    <ListQA />
  </div>
);
