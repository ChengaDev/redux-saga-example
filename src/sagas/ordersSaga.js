import { take, fork, put } from 'redux-saga/effects';
import { LOAD_USERS_SUCCESS } from '../types/usersTypes';
import {
  loadUserOrders,
  loadUserOrdersSuccess,
  loadUserOrderssFailed,
} from '../actions/orderActions';
import { fetchUserOrders } from '../api/ordersApi';

function* handleUserOrdersRequest(userId) {
  // we want to do retries, but in order avoid to many retries - we can limit the retry count to 3 or any other number we want
  const maxRetryTimes = 3;
  for (let i = 0; i < maxRetryTimes; i++) {
    try {
      yield put(loadUserOrders());
      const orders = yield fetchUserOrders(userId);
      yield put(loadUserOrdersSuccess(orders));
      // in case of success - we return from the handler
      return true;
    } catch (error) {}
  }
  yield put(loadUserOrderssFailed(userId));
}

export default function* watchOrdersRequest() {
  const { users } = yield take(LOAD_USERS_SUCCESS);

  for (let i = 0; i < users.length; i++) {
    yield fork(handleUserOrdersRequest, users[i].id);
  }
}
