import React from 'react';
import Order from './Order';

function OrdersList({ orders }) {
  return (
    <div>
      {orders.map((order) => {
        return <Order order={order} />;
      })}
    </div>
  );
}

export default OrdersList;
