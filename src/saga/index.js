import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import createMiddleSagaware  from 'redux-saga';

import { watchIncrementSaga } from './async'

const sagaMiddleware = createMiddleSagaware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchIncrementSaga);

export default store;