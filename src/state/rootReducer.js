import { always } from 'lodash/fp';
import { combineReducers } from 'redux';

const VERSION = process.env.REACT_APP_VERSION || 'DEVELOPMENT';

export default combineReducers({
  version: always(VERSION),
});
