import React from 'react';
import { map } from 'lodash/fp';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProgressItem from './progressItem';
import { idsSelector } from './state';

const Layout = ({ ids }) => (
  <div>
    <Link to="/">Home</Link>
    {map(
      id => (
        <ProgressItem id={id} key={id} />
      ),
      ids,
    )}
  </div>
);

export default compose(connect(state => ({ ids: idsSelector(state) })))(Layout);
