import { all } from 'redux-saga/effects';

import { booksSaga } from './all-books';
import { categoriesSaga } from './all-categories';
import { oneBookSaga } from './one-book';

export function* rootWatcher() {
    yield all([booksSaga(), categoriesSaga(), oneBookSaga()])
}