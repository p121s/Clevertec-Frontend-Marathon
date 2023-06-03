import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import { Toast } from '../../shared/toasts/toast';
import { getOneBookFailure, setOneBook } from '../reducers/one-book/one-book';

const token = localStorage.getItem('token');

function fetch(id: number | '') {
  return axios({
    method: 'post',
    url: `https://strapi.cleverland.by/api/books/${id}`,
    headers: {'Authorization': `Bearer ${token}`}
  });
}

function* workerGetOneBook(action: PayloadAction<number | ''>) {
  try {
    const { data }: AxiosResponse = yield call(() => fetch(action.payload));

    yield put(setOneBook(data));
  } catch (e) {
    yield put(getOneBookFailure());
    yield call(() =>
      toast.error(<Toast type='error'>Что-то пошло не так. Обновите страницу через некоторое время.</Toast>)
    );
  }
}

export function* oneBookSaga() {
  yield takeEvery('book/getOneBookFetch', workerGetOneBook);
}
