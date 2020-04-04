import initialState from './initialState';
import userTypes from '../types/usersTypes';

export default function usersReducer(state = initialState.users, action) {
  switch (action.type) {
    case userTypes.LOAD_USERS_SUCCESS:
      return Object.assign([], [...action.users]);
    case userTypes.LOAD_USERS_FAILED:
      return Object.assign({}, state, { error: action.error });
    default:
      return state;
  }
}
