import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { getBooksFailure, setAllBooks } from '../reducers/all-books/all-books';

const token = localStorage.getItem('token');

function fetch() {
  return axios({
    method: 'post',
    url: 'https://strapi.cleverland.by/api/books',
    headers: {'Authorization': `Bearer ${token}`}
  });
}

function* workerGetAllBooks() {
  try {
    const { data }: AxiosResponse = yield call(fetch);

    yield put(setAllBooks(data));
  } catch (e) {
    yield put(getBooksFailure());
  }
}

export function* booksSaga() {
  yield takeEvery('books/getBooksFetch', workerGetAllBooks);
}
