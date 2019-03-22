import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import createMiddleSagaware  from 'redux-saga'

const sagaMiddleware = createMiddleSagaware()

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

export default store;