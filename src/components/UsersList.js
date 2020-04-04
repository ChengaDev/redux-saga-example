import React from 'react';
import User from './User';
import styled from 'styled-components';

function UsersList({ users }) {
  return (
    <React.Fragment>
      <ListTitle>User Orders</ListTitle>
      <List>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <User {...user} />
            </div>
          );
        })}
      </List>
    </React.Fragment>
  );
}

const ListTitle = styled.div`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  color: blue;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const List = styled.div`
  margin: 0 auto;
`;

export default UsersList;
