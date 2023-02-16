import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/root-reduces';
import { rootWatcher } from './sagas/root-watcher';

const saga = createSagaMiddleware();

// eslint-disable-next-line import/no-default-export
export default configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootWatcher);
