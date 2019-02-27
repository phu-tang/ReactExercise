import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { reduce, path, flow, keys, always } from 'lodash/fp';
import progressData from '../../data/progress.json';

export const START_RANDOM_ACTION = 'progress/START_RANDOM_ACTION';
export const STOP_RANDOM_ACTION = 'progress/STOP_RANDOM_ACTION';
const UPDATE_PERCENT_ACTION = 'progress/UPDATE_PERCENT_ACTION';

export const startRandomAC = always({ type: START_RANDOM_ACTION });
export const stopRandomAC = always({ type: STOP_RANDOM_ACTION });
export const updatePercentAC = (id, percent) => ({
  type: UPDATE_PERCENT_ACTION,
  payload: { id, percent },
});

const defaultDisplayName = reduce(
  (obj, { id, displayName }) => ({
    ...obj,
    [id]: displayName,
  }),
  {},
  progressData,
);

const defaultColor = reduce(
  (obj, { id, color }) => ({ ...obj, [id]: color }),
  {},
  progressData,
);

const defaultPercent = reduce(
  (obj, { id, progress }) => ({
    ...obj,
    [id]: progress,
  }),
  {},
  progressData,
);
const displayNameReducer = handleActions({}, defaultDisplayName);

const colorReducer = handleActions({}, defaultColor);

const percentReducer = handleActions(
  {
    [UPDATE_PERCENT_ACTION]: (state, { payload }) => ({
      ...state,
      [path('id', payload)]: path('percent', payload),
    }),
  },
  defaultPercent,
);

const reducer = combineReducers({
  displayName: displayNameReducer,
  color: colorReducer,
  percent: percentReducer,
});

export const displayNameSelector = id => path(`progress.displayName.${id}`);
export const colorSelector = id => path(`progress.color.${id}`);
export const percentSelector = id => path(`progress.percent.${id}`);
export const idsSelector = flow(
  path('progress.displayName'),
  keys,
);

export default { progress: reducer };
