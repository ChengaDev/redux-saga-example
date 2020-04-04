import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import ordersReducer from './orderReducer';

export default combineReducers({
  users: usersReducer,
  orders: ordersReducer,
});
