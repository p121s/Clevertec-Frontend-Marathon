// eslint-disable-next-line simple-import-sort/imports
import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { getBooksFailure, setAllBooks } from '../reducers/all-books';
import { Toast } from '../../shared/toasts/toast';

function* workerGetAllBooks() {
  try {
    const { data }: AxiosResponse = yield call(axios.get, 'https://strapi.cleverland.by/api/books');

    yield put(setAllBooks(data));
  } catch (e) {
    yield put(getBooksFailure());
    yield call(() =>
      toast.error(<Toast type='error'>Что-то пошло не так. Обновите страницу через некоторое время.</Toast>)
    );
  }
}

export function* booksSaga() {
  yield takeEvery('books/getBooksFetch', workerGetAllBooks);
}
