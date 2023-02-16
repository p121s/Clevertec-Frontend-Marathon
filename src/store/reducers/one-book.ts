/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const oneBook = createSlice({
  name: 'book',
  initialState: {
    book: null,
    isLoading: false,
    id: undefined,
  },
  reducers: {
    getOneBookFetch: (state, action) => {
      state.id = action.payload.id;
      state.isLoading = true;
    },
    setOneBook: (state, action) => {
      state.book = action.payload;
      state.isLoading = false;
    },
    getOneBookFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getOneBookFetch, setOneBook, getOneBookFailure } = oneBook.actions;
// eslint-disable-next-line import/no-default-export
export default oneBook.reducer;
