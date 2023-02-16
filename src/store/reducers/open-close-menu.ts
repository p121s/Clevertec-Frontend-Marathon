/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const openCloseMenu = createSlice({
  name: 'handlerOpenCloseMenu',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    openClose: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    }
  },
});

export const { openClose, closeMenu } = openCloseMenu.actions;
// eslint-disable-next-line import/no-default-export
export default openCloseMenu.reducer;
