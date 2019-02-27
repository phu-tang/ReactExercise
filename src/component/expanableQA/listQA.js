import React from 'react';
import { map } from 'lodash/fp';
import { compose, withState } from 'recompose';
import { connect } from 'react-redux';
import { displayDataSelector } from './state';

const style = { borderBottom: '1px solid black', padding: 15, margin: 15 };

function createMarkup(data) {
  return { __html: data };
}

const Layout = ({ data, currentExpan, updateExpan }) => (
  <div>
    <table>
      <thead style={{ ...style }} bgcolor="#F6F6F6">
        <tr>
          <th style={{ ...style, minWidth: 88 }}>NO</th>
          <th style={{ ...style, minWidth: 88 }}>TYPE</th>
          <th style={{ ...style, minWidth: 480 }}>{'Q&A'}</th>
        </tr>
      </thead>
      <tbody>
        {map(
          item => (
            <React.Fragment key={item.id}>
              <tr
                style={style}
                onClick={() => {
                  if (currentExpan === item.id) {
                    updateExpan(null);
                  } else {
                    updateExpan(item.id);
                  }
                }}
              >
                <td style={style}>{item.id}</td>
                <td style={style}>{item.type}</td>
                <td style={style}>{item.QA}</td>
              </tr>
              {currentExpan === item.id ? (
                <tr>
                  <td style={style} colSpan="3">
                    <div dangerouslySetInnerHTML={createMarkup(item.content)} />
                  </td>
                </tr>
              ) : null}
            </React.Fragment>
          ),
          data,
        )}
      </tbody>
    </table>
  </div>
);

export default compose(
  withState('currentExpan', 'updateExpan', null),
  connect(state => ({ data: displayDataSelector(state) })),
)(Layout);
