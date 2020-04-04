import { put, takeLatest } from 'redux-saga/effects';
import { LOAD_USERS } from '../types/usersTypes';
import { fetchUsers } from '../api/usersApi';
import { loadUsersSuccess, loadUsersFailed } from '../actions/userActions';

function* handleUsersLoad() {
  try {
    const users = yield fetchUsers();
    yield put(loadUsersSuccess(users));
  } catch (error) {
    yield put(loadUsersFailed(error));
  }
}

export default function* watchUsersLoad() {
  yield takeLatest(LOAD_USERS, handleUsersLoad);
}
