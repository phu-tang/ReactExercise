import { always } from 'lodash/fp';
import data from '../../data/listquestion1.json';

export const displayDataSelector = always(data);
