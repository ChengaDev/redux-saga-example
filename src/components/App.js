import React, { useEffect } from 'react';
import { loadUsers } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import userSelectors from '../selectors/userSelectors';
import UsersList from './UsersList';
import styled from 'styled-components';

function App() {
  const users = useSelector(userSelectors.usersWithOrders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const renderUserList = () => {
    return <UsersList users={users} />;
  };

  const renderLoading = () => {
    return <ApplicationLoader>Loading users...</ApplicationLoader>;
  };

  const renderContent = () => {
    if (users && users.length > 0) {
      return renderUserList();
    } else {
      return renderLoading();
    }
  };

  return <div id='app'>{renderContent()}</div>;
}

const ApplicationLoader = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 50px;
  margin: 0 auto;
  margin-top: 70px;
  text-align: center;
`;

export default App;
