/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { OpenCloseMenuStore } from './open-close-menu-interfaces';

const initialState: OpenCloseMenuStore = {
  isMenuOpen: false,
}

export const openCloseMenu = createSlice({
  name: 'handlerOpenCloseMenu',
  initialState,
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
