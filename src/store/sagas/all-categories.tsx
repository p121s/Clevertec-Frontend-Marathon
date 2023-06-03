import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { getCategoriesFailure, setAllCategories } from '../reducers/all-categories/all-categories';

const token = localStorage.getItem('token');

function fetch() {
  return axios({
    method: 'post',
    url: 'https://strapi.cleverland.by/api/categories',
    headers: {'Authorization': `Bearer ${token}`}
  });
}

function* workerGetAllCategories() {
  try {
    const { data }: AxiosResponse = yield call(fetch);

    yield put(setAllCategories(data));
  } catch (e) {
    yield put(getCategoriesFailure());
  }
}

export function* categoriesSaga() {
  yield takeEvery('categories/getCategoriesFetch', workerGetAllCategories);
}
