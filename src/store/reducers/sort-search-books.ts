/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const sortSearchBooks = createSlice({
  name: 'sortSearchBooks',
  initialState: {
    isDescendingRanking: true,
    searchText: '',
  },
  reducers: {
    sortAscendingDescending: (state) => {
      state.isDescendingRanking = !state.isDescendingRanking;
    },
    getSearchText: (state, action) => {
      state.searchText = action.payload;
    }
  },
});

export const { sortAscendingDescending, getSearchText } = sortSearchBooks.actions;
// eslint-disable-next-line import/no-default-export
export default sortSearchBooks.reducer;
