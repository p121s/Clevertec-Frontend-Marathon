/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const allCategories = createSlice({
  name: 'categories',
  initialState: {
    menu: [
      {
        name: 'Showcase of books',
        id: 1,
        path: '/',
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
  },
  reducers: {
    getCategoriesFetch: (state) => {
      state.isLoading = true;
    },
    setAllCategories: (state, action) => {
      state.menu[0].submenu = action.payload;
      state.isLoading = false;
    },
    getCategoriesFailure: (state) => {
      state.isLoading = false;
    }
  },
});

export const { getCategoriesFetch, setAllCategories, getCategoriesFailure } = allCategories.actions;
// eslint-disable-next-line import/no-default-export
export default allCategories.reducer;