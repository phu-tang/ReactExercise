import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <h1>I-ON Communications Code Test</h1>
    <li>
      <Link to="/test1">Test 1</Link>
    </li>
    <li>
      <Link to="/test2">Test 2</Link>
    </li>
    <li>
      <Link to="/test3">Test 3</Link>
    </li>
    <li>
      <Link to="/test4">Test 4</Link>
    </li>
  </div>
);
