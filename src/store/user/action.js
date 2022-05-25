export const ACTION_SET_LOGIN = '@SET_LOGIN';
export const ACTION_SET_LOGOUT = '@SET_LOGOUT';


export const actionSetLogin = user => {
  return {
    type: ACTION_SET_LOGIN,
    payload: user,
  };
};

export const actionSetLogout = () => {
  return {
    type: ACTION_SET_LOGOUT,
  };
};
