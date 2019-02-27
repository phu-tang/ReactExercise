import React from 'react';
import { Link } from 'react-router-dom';
import SearchField from './searchField';
import ListQA from './listQA';

export default () => (
  <div>
    <Link to="/">Home</Link>

    <SearchField />
    <ListQA />
  </div>
);
