import React, { useEffect } from 'react';
import { loadUsers } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import userSelectors from '../selectors/userSelectors';

function App() {
  const users = useSelector(userSelectors.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <div>
      {users.length > 0 &&
        users.map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </div>
  );
}

export default App;
