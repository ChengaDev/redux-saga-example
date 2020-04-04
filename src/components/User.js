import React from 'react';
import styled from 'styled-components';
import OrdersList from './OrdersList';

function User({ id, name, orders }) {
  const renderOrders = () => {
    return (
      <React.Fragment>
        <OrdersListTitle>Ordered products:</OrdersListTitle>
        <OrdersList orders={orders} />
      </React.Fragment>
    );
  };

  const renderEmptyCase = () => {
    return <EmptyCaseText>User have no orders</EmptyCaseText>;
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
`;

const OrdersSection = styled.div`
  margin-top: 20px;
`;

const EmptyCaseText = styled.div`
  color: red;
  font-weight: bold;
`;

const OrdersListTitle = styled.div`
  color: orange;
  margin-bottom: 10px;
  font-weight: bold;
`;

export default User;
