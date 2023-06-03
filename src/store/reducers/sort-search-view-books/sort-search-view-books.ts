/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { SortSearchViewBooksStore } from './sort-search-view-books-interfaces';

const initialState: SortSearchViewBooksStore = {
  isDescendingRanking: true,
  searchText: '',
  isLinear: false,
}

export const sortSearchViewBooks = createSlice({
  name: 'sortSearchBooks',
  initialState,
  reducers: {
    sortAscendingDescending: (state) => {
      state.isDescendingRanking = !state.isDescendingRanking;
    },
    getSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    clearSearchText: (state) => {
      state.searchText = '';
    },
    getLinearView: (state) => {
      state.isLinear = true;
    },
    getCardView: (state) => {
      state.isLinear = false;
    },
  },
});

export const { sortAscendingDescending, getSearchText,clearSearchText, getLinearView, getCardView } = sortSearchViewBooks.actions;
// eslint-disable-next-line import/no-default-export
export default sortSearchViewBooks.reducer;
