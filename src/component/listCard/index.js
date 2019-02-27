import React from 'react';
import { map } from 'lodash/fp';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './card';
import { listDataSelector } from './state';

const Layout = ({ data }) => (
  <div>
    <Link to="/">Home</Link>
    {map(
      item => (
        <Card {...item} key={item.id} />
      ),
      data,
    )}
  </div>
);

export default connect(state => ({ data: listDataSelector(state) }))(Layout);
