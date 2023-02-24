import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { getBooksFailure, setAllBooks } from '../reducers/all-books/all-books';

function* workerGetAllBooks() {
  try {
    const { data }: AxiosResponse = yield call(axios.get, 'https://strapi.cleverland.by/api/books');

    yield put(setAllBooks(data));
  } catch (e) {
    yield put(getBooksFailure());
  }
}

export function* booksSaga() {
  yield takeEvery('books/getBooksFetch', workerGetAllBooks);
}
