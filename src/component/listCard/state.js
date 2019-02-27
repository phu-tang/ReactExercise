import data from '../../data/listdata.json';
import { always } from 'lodash/fp';

export const listDataSelector = always(data);
