import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import { Toast } from '../../shared/toasts/toast';
import { getOneBookFailure, setOneBook } from '../reducers/one-book';

function* workerGetOneBook(action: any) {
  try {
    const { data }: AxiosResponse = yield call(
      axios.get,
      `https://strapi.cleverland.by/api/books/${action.payload.id}`
    );

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
