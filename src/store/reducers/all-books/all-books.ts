/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AllBooksStore, IBook } from './all-books-interfaces';

const initialState: AllBooksStore = {
  books: [],
  isLoading: false,
  isLoaded: false,
  isError: false,
}

export const allBooks = createSlice({
  name: 'books',
  initialState,
  reducers: {
    getBooksFetch: (state) => {
      state.isLoading = true;
      state.isLoaded = false;
      state.isError = false;
    },
    setAllBooks: (state, action: PayloadAction<IBook[]>) => {
      state.books = action.payload;
      state.isLoading = false;
      state.isLoaded = true;
      state.isError = false;
    },
    getBooksFailure: (state) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isError = true;
    },
  },
});

export const { getBooksFetch, setAllBooks, getBooksFailure } = allBooks.actions;

// eslint-disable-next-line import/no-default-export
export default allBooks.reducer;