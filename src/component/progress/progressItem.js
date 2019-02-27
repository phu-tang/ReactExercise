import React from 'react';
import { Line } from 'rc-progress';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import {
  displayNameSelector,
  colorSelector,
  percentSelector,
  startRandomAC,
  stopRandomAC,
} from './state';

const Layout = ({ displayName, color, percent = 50 }) => (
  <div style={{ display: 'flex', maxWidth: 'calc(100vw - 20px)' }}>
    <div style={{ paddingLeft: 15, paddingRight: 15 }}>{displayName}</div>
    <div style={{ width: 500 }}>
      <Line percent={percent} strokeColor={color} />
    </div>
  </div>
);

export default compose(
  connect(
    (state, { id }) => ({
      displayName: displayNameSelector(id)(state),
      color: colorSelector(id)(state),
      percent: percentSelector(id)(state),
    }),
    {
      startRandom: startRandomAC,
      stopRandom: stopRandomAC,
    },
  ),
  lifecycle({
    componentDidMount() {
      this.props.startRandom();
    },
    componentWillUnmount() {
      this.props.stopRandom();
    },
  }),
)(Layout);
