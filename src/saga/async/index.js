import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { INCREMENT_ASYNC } from '../constant/count';

const delay = (ms) => new Promise(resolve=>setTimeout(resolve,ms))

function* incrementAsync(){
  yield delay(2000);
  yield put({type:'INCREMENT'})
}

export function* watchIncrementSaga(){
  yield takeEvery(INCREMENT_ASYNC,incrementAsync)
}