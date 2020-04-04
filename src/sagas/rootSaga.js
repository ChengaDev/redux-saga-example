import { all } from 'redux-saga/effects';
import usersSaga from './usersSaga';
import ordersSaga from './ordersSaga';

export default function* rootSaga() {
  yield all([usersSaga(), ordersSaga()]);
}
