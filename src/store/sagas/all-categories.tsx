import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { Toast } from '../../shared/toasts/toast';
import { getCategoriesFailure, setAllCategories } from '../reducers/all-categories';

function* workerGetAllCategories() {
  try {
    const { data }: AxiosResponse = yield call(axios.get, 'https://strapi.cleverland.by/api/categories');

    yield put(setAllCategories(data));
  } catch (e) {
    yield put(getCategoriesFailure());
    yield call(() =>
      toast.error(<Toast type='error'>Что-то пошло не так. Обновите страницу через некоторое время.</Toast>)
    );
  }
}

export function* categoriesSaga() {
  yield takeEvery('categories/getCategoriesFetch', workerGetAllCategories);
}
