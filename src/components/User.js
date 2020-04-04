import React from 'react';
import styled from 'styled-components';

function User({ id, name, orders }) {
  const renderOrders = () => {
    return <div>orders count: {orders.length}</div>;
  };

  const renderEmptyCase = () => {
    return <div>User have no orders</div>;
  };

  const renderOrdersSection = () => {
    if (orders.length > 0) {
      return renderOrders();
    } else {
      return renderEmptyCase();
    }
  };

  return (
    <UserWrapper key={id}>
      <Username>{name}</Username>
      <OrdersSection>{renderOrdersSection()}</OrdersSection>
    </UserWrapper>
  );
}

const UserWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  min-width: 300px;
  min-height: 100px;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid;
`;

const Username = styled.div`
  font-weight: bold;
  text-decoration: underline;
`;

const OrdersSection = styled.div`
  margin-top: 20px;
`;

export default User;
