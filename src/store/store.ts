import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/root-reduces';
import { rootWatcher } from './sagas/root-watcher';

const saga = createSagaMiddleware();

// eslint-disable-next-line import/no-default-export
export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector