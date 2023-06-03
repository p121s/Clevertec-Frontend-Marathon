import { combineReducers } from 'redux';

import allBooksReducer from './all-books/all-books';
import allCategoriesReducer from './all-categories/all-categories';
import oneBookReducer from './one-book/one-book';
import openCloseMenuReducer from './open-close-menu/open-close-menu';
import sortSearchViewBooksReducer from './sort-search-view-books/sort-search-view-books';
import userActionsReducer from './user-actions/user-actions';

// eslint-disable-next-line import/no-default-export
export default combineReducers({
  openCloseMenuReducer,
  allBooksReducer,
  allCategoriesReducer,
  oneBookReducer,
  sortSearchViewBooksReducer,
  userActionsReducer,
});
