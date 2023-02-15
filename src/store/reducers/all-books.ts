/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const allBooks = createSlice({
  name: 'books',
  initialState: {
    books: [],
    isLoading: false,
  },
  reducers: {
    getBooksFetch: (state) => {
      state.isLoading = true;
    },
    setAllBooks: (state, action) => {
      state.books = action.payload;
      state.isLoading = false;
    },
    getBooksFailure: (state) => {
      state.isLoading = false;
    }
  },
});

export const { getBooksFetch, setAllBooks, getBooksFailure } = allBooks.actions;
// eslint-disable-next-line import/no-default-export
export default allBooks.reducer;