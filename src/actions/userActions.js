import {
  LOAD_USERS,
  LOAD_USERS_FAILED,
  LOAD_USERS_SUCCESS,
} from '../types/usersTypes';

export const loadUsers = () => ({ type: LOAD_USERS });
export const loadUsersSuccess = (usersArray) => ({
  type: LOAD_USERS_SUCCESS,
  users: usersArray,
});
export const loadUsersFailed = (error) => ({ type: LOAD_USERS_FAILED, error });
