import { all } from 'redux-saga/effects';

import { booksSaga } from './all-books';
import { categoriesSaga } from './all-categories';
import { authUser } from './auth-user';
import { changePasswordWatcher } from './change-password';
import { oneBookSaga } from './one-book';
import { registration } from './registration';
import { resetPass } from './reset-password';

export function* rootWatcher() {
  yield all([
    booksSaga(),
    categoriesSaga(),
    oneBookSaga(),
    registration(),
    authUser(),
    resetPass(),
    changePasswordWatcher(),
  ]);
}
