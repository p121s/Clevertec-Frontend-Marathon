/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const allCategories = createSlice({
  name: 'categories',
  initialState: {
    menu: [
      {
        name: 'Showcase of books',
        id: 1,
        path: '',
        title: 'Витрина книг',
        submenu: null,
      },
      {
        name: 'Terms of use',
        id: 2,
        path: 'Terms of use',
        title: 'Правила пользования',
        submenu: null,
      },
      {
        name: 'Contract offer',
        id: 3,
        path: 'Contract offer',
        title: 'Договор оферты',
        submenu: null,
      },
    ],
    isLoading: false,
    isLoaded: false,
    isError: false,
  },
  reducers: {
    getCategoriesFetch: (state) => {
      state.isLoading = true;
      state.isLoaded = false;
      state.isError = false;
    },
    setAllCategories: (state, action) => {
      const categories = action.payload;

      categories.unshift({name: 'Все книги', path: 'all', id: 0});
      
      state.menu[0].submenu = categories;
      state.isLoading = false;
      state.isLoaded = true;
      state.isError = false;
    },
    getCategoriesFailure: (state) => {
      state.isLoading = false;
      state.isLoaded = true;
      state.isError = true;
    },
  },
});

export const { getCategoriesFetch, setAllCategories, getCategoriesFailure } = allCategories.actions;
// eslint-disable-next-line import/no-default-export
export default allCategories.reducer;
