import { ACTION_SET_LOGIN, ACTION_SET_LOGOUT } from './action';

const initialState = {
  user: JSON.parse(window.localStorage.getItem('user')),
  token: JSON.parse(window.localStorage.getItem('token')),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_LOGIN:
      const newUserState = action.payload;
      return {
        ...state,
        user: newUserState,
      };

    case ACTION_SET_LOGOUT:
      return {
        user: null,
        token: '',
      };

    default:
      return state;
  }
};
