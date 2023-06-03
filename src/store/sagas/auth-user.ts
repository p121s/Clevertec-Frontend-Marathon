import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { getAnswerServer, getStatusAuth } from '../reducers/user-actions/user-actions';
import { IAnswerServer } from '../reducers/user-actions/user-actions-interfaces';

function fetch(params: IAnswerServer) {
  return axios({
    method: 'post',
    url: 'https://strapi.cleverland.by/api/auth/local',
    data: {params},
  });
}

function* workerAuthUser(action: PayloadAction<IAnswerServer>) {
  try {
    const { data }: AxiosResponse = yield call(() => fetch(action.payload));

    localStorage.setItem('token', data.jwt);

    yield put(getAnswerServer(data));
  } catch (e: any) {
    yield put(getStatusAuth(e.response.status));
  }
}

export function* authUser() {
  yield takeEvery('userActuons/setAuthUser', workerAuthUser);
}
