import React from 'react';
import { map } from 'lodash/fp';
import { connect } from 'react-redux';
import { displayDataSelector } from './state';

const style = { borderBottom: '1px solid black', padding: 15, margin: 15 };

const Layout = ({ data }) => (
  <div>
    <table>
      <thead style={{ ...style }} bgcolor="#F6F6F6">
        <tr>
          <th style={{ ...style, minWidth: 50 }}>NO</th>
          <th style={{ ...style, minWidth: 50 }}>TYPE</th>
          <th style={{ ...style, minWidth: 315 }}>{'Q&A'}</th>
        </tr>
      </thead>
      <tbody>
        {map(
          item => (
            <tr key={item.id} style={style}>
              <td style={style}>{item.id}</td>
              <td style={style}>{item.type}</td>
              <td style={style}>{item.QA}</td>
            </tr>
          ),
          data,
        )}
      </tbody>
    </table>
  </div>
);

export default connect(state => ({ data: displayDataSelector(state) }))(Layout);
