/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  IAnswerServer,
  IAuthData,
  IChangePasswordData,
  IRegistrationData,
  IResetPass,
  IStateRegistration,
} from './user-actions-interfaces';

const initialState: IStateRegistration = {
  registrationData: {
    email: '',
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  },
  authData: {
    identifier: '',
    password: '',
  },
  resetPasswordData: {
    email: '',
  },
  changePassData: {
    password: '',
    passwordConfirmation: '',
    code: '',
  },
  answerServer: {
    jwt: '',
    user: {
      id: 8,
      username: '',
      email: '',
      provider: '',
      confirmed: false,
      blocked: false,
      createdAt: '',
      updatedAt: '',
      firstName: '',
      lastName: '',
      phone: '',
    },
  },

  statusRegistr: 0,
  statusAuth: 0,
  statusChangePass: 0, 
  isChangePassword: null,
  isLoading: false,
};

const userActuons = createSlice({
  name: 'userActuons',
  initialState,
  reducers: {
    setRegistrationData: (state, action: PayloadAction<IRegistrationData>) => {
      state.registrationData = { ...action.payload };
      state.isLoading = true;
    },
    setAuthUser: (state, action: PayloadAction<IAuthData>) => {
      state.authData = { ...action.payload };
      state.isLoading = true;
    },
    getAnswerServer: (state, action: PayloadAction<IAnswerServer>) => {
      state.answerServer = { ...action.payload };
      state.isLoading = false;
    },
    getStatusRegistr: (state, action: PayloadAction<number>) => {
      state.statusRegistr = action.payload;
      state.isLoading = false;
    },
    getStatusChangePass: (state, action: PayloadAction<number>) => {
      state.statusChangePass = action.payload;
      state.isLoading = false;
    },
    getStatusAuth: (state, action: PayloadAction<number>) => {
      state.statusAuth = action.payload;
      state.isLoading = false;
    },
    clearStatusRegistr: (state) => {
      state.statusRegistr = 0;
    },
    clearStatusAuth: (state) => {
      state.statusAuth = 0;
    },
    clearStatusChangePass: (state) => {
      state.statusChangePass = 0;
    },
    resetPassword: (state, action: PayloadAction<IResetPass>) => {
      state.isChangePassword = null;
      state.resetPasswordData = action.payload;
      state.isLoading = true;
    },
    getEmailForChangePass: (state, action: PayloadAction<boolean>) => {
      state.isChangePassword = action.payload;
      state.isLoading = false;
    },
    setNewPasswords: (state, action: PayloadAction<IChangePasswordData>) => {
      state.changePassData = action.payload;
      state.isLoading = true;
    },
    changePassword: (state, action: PayloadAction<IAnswerServer>) => {
      state.answerServer = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  setRegistrationData,
  setAuthUser,
  getAnswerServer,
  getStatusRegistr,
  getStatusAuth,
  clearStatusRegistr,
  clearStatusAuth,
  clearStatusChangePass,
  getStatusChangePass,
  resetPassword,
  getEmailForChangePass,
  setNewPasswords,
  changePassword
} = userActuons.actions;

// eslint-disable-next-line import/no-default-export
export default userActuons.reducer;
