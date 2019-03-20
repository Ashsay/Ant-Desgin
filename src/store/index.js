import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import defaultState from './state';

import {helloSaga} from './../saga';

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  defaultState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(helloSaga);

export default store;