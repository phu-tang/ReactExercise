import { always, flow, path, isEmpty, includes, filter } from 'lodash/fp';
import { getFormValues } from 'redux-form';
import data from '../../data/listquestion.json';
import { createSelector } from 'reselect';

const pureDataSelector = always(data);

const searchKeySelector = flow(
  getFormValues('searchQA'),
  path('searchValue'),
);

export const displayDataSelector = createSelector(
  pureDataSelector,
  searchKeySelector,
  (listData, searchKey) => {
    if (isEmpty(searchKey)) {
      return listData;
    }
    return flow(
      filter(item => includes(searchKey, `${item.id}${item.type}${item.QA}`)),
    )(listData);
  },
);
