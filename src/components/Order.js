import React from 'react';
import styled from 'styled-components';

function Order({ order }) {
  return (
    <OrderDetails>
      {order.product} x {order.quantity}
    </OrderDetails>
  );
}

const OrderDetails = styled.div`
  margin: 5px;
`;

export default Order;
