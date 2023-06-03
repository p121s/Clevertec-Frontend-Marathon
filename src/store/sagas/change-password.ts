import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { changePassword, getEmailForChangePass } from '../reducers/user-actions/user-actions';
import { IChangePasswordData } from '../reducers/user-actions/user-actions-interfaces';

function fetch(params: IChangePasswordData) {
  return axios({
    method: 'post',
    url: 'https://strapi.cleverland.by/api/auth/reset-password',
    params,
  });
}

function* workerChangePass(action: PayloadAction<IChangePasswordData>) {
  try {
    const { data }: AxiosResponse = yield call(() => fetch(action.payload));

    localStorage.setItem('token', data.jwt);

    yield put(changePassword(data));
  } catch (e: any) {
    yield put(getEmailForChangePass(false));
  }
}

export function* changePasswordWatcher() {
  yield takeEvery('userActuons/setNewPasswords', workerChangePass);
}