import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { getEmailForChangePass } from '../reducers/user-actions/user-actions';
import { IAnswerServer } from '../reducers/user-actions/user-actions-interfaces';

function fetch(params: IAnswerServer) {
  return axios({
    method: 'post',
    url: 'https://strapi.cleverland.by/api/auth/forgot-password',
    data: {params},
  });
}

function* workerResetPass(action: PayloadAction<IAnswerServer>) {
  try {
    const { data }: AxiosResponse = yield call(() => fetch(action.payload));

    yield put(getEmailForChangePass(data));
  } catch (e: any) {
    yield put(getEmailForChangePass(false));
  }
}

export function* resetPass() {
  yield takeEvery('userActuons/resetPassword', workerResetPass);
}