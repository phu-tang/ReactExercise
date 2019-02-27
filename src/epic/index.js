import { interval } from 'rxjs';
import { mergeMap, filter, map, takeUntil } from 'rxjs/operators';
import { random } from 'lodash/fp';
import { combineEpics } from 'redux-observable';

import {
  START_RANDOM_ACTION,
  STOP_RANDOM_ACTION,
  updatePercentAC,
} from '../component/progress/state';

const updateRandomProgressWhenStarRandom = (action$, state) =>
  action$.pipe(
    filter(action => action.type === START_RANDOM_ACTION),
    mergeMap(action =>
      interval(2000).pipe(
        map(() => [
          updatePercentAC(1, random(0, 100)),
          updatePercentAC(2, random(0, 100)),
          updatePercentAC(3, random(0, 100)),
          updatePercentAC(4, random(0, 100)),
          updatePercentAC(5, random(0, 100)),
        ]),
        takeUntil(action$.ofType(STOP_RANDOM_ACTION)),
      ),
    ),
  );

export default combineEpics(updateRandomProgressWhenStarRandom);
