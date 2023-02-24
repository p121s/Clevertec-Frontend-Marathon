/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { OneBookStore } from './one-book-interfaces';

const initialState: OneBookStore = {
  book: {
    id: 0,
    title: '',
    rating: null,
    issueYear: '',
    description: '',
    publish: '',
    pages: '',
    cover: '',
    weight: '',
    format: '',
    ISBN: '',
    producer: '',
    authors: [],
    images: [],
    categories: [],
    comments: [],
    booking: {
      id: 0,
      order: false,
      dateOrder: '',
      customerId: 0,
      customerFirstName: '',
      customerLastName: '',
    },
    delivery: {
      id: 0,
      handed: false,
      dateHandedFrom: '',
      dateHandedTo: '',
      recipientId: 0,
      recipientFirstName: '',
      recipientLastName: '',
    },
    histories: [],
  },
  isLoading: false,
  isError: false,
  id: '',
};

export const oneBook = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getOneBookFetch: (state, action) => {
      state.id = action.payload.id;
      state.isLoading = true;
      state.isError = false;
    },
    setOneBook: (state, action) => {
      state.book = action.payload;
      state.isLoading = false;
    },
    getOneBookFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { getOneBookFetch, setOneBook, getOneBookFailure } = oneBook.actions;
// eslint-disable-next-line import/no-default-export
export default oneBook.reducer;
