import { userConstants } from "../constants";

const initialState = {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {loggedIn: true};
    case userConstants.LOGOUT:
      return {loggedIn: true};
    default:
      return state;
  }
}
