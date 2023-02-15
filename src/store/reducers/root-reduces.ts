import { combineReducers } from 'redux';

import allBooksReducer from './all-books';
import allCategoriesReducer from './all-categories';
import oneBookReducer from './one-book';
import openCloseMenuReducer from './open-close-menu';

// eslint-disable-next-line import/no-default-export
export default combineReducers({
  openCloseMenuReducer,
  allBooksReducer,
  allCategoriesReducer,
  oneBookReducer,
});
