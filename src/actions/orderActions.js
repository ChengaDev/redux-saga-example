import {
  LOAD_USER_ORDERS,
  LOAD_USER_ORDERS_FAILED,
  LOAD_USER_ORDERS_SUCCESS,
} from '../types/orderTypes';

export const loadUserOrders = (userId) => ({ type: LOAD_USER_ORDERS, userId });
export const loadUserOrdersSuccess = (userOrdersArray) => ({
  type: LOAD_USER_ORDERS_SUCCESS,
  orders: userOrdersArray,
});
export const loadUserOrderssFailed = (error) => ({
  type: LOAD_USER_ORDERS_FAILED,
  error,
});
