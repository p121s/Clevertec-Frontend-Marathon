import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { getAnswerServer, getStatusRegistr } from '../reducers/user-actions/user-actions';
import { IAnswerServer } from '../reducers/user-actions/user-actions-interfaces';

function fetch(params: IAnswerServer) {
  return axios({
    method: 'post',
    url: 'https://strapi.cleverland.by/api/auth/local/register',
    data: {params},
  });
}

function* workerRegistration(action: PayloadAction<IAnswerServer>) {
  try {
    const { data }: AxiosResponse = yield call(() => fetch(action.payload));

    localStorage.setItem('token', data.jwt);

    yield put(getAnswerServer(data));
  } catch (e: any) {
    yield put(getStatusRegistr(e.response.status));
  }
}

export function* registration() {
  yield takeEvery('userActuons/setRegistrationData', workerRegistration);
}
