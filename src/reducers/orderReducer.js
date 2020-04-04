import initialState from './initialState';
import orderTypes from '../types/orderTypes';

export default function orderReducer(state = initialState.users, action) {
  switch (action.type) {
    case orderTypes.LOAD_USER_ORDERS_SUCCESS:
      return [...state, ...action.orders];
    case orderTypes.LOAD_USER_ORDERS_FAILED:
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
}
