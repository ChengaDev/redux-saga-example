import { createSelector } from 'reselect';
import orderSelectors from './orderSelectors';

const users = (state) => state.users;

const usersWithOrders = createSelector(
  users,
  orderSelectors.orders,
  (users, orders) => {
    return users.map((user) => {
      const userOrders = orders.filter((order) => order.userId === user.id);
      return { ...user, orders: userOrders ? userOrders : null };
    });
  }
);

export default { users, usersWithOrders };
