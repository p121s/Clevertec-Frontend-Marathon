import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { getCategoriesFailure, setAllCategories } from '../reducers/all-categories';

function* workerGetAllCategories() {
  try {
    const { data }: AxiosResponse = yield call(axios.get, 'https://strapi.cleverland.by/api/categories');

    yield put(setAllCategories(data));
  } catch (e) {
    yield put(getCategoriesFailure());
  }
}

export function* categoriesSaga() {
  yield takeEvery('categories/getCategoriesFetch', workerGetAllCategories);
}
