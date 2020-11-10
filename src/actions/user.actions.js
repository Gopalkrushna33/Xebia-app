import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";

export const userActions = {
  login,
  logout,
  getPlanets,
};

function login(username, password) {
  return (dispatch) => {
    dispatch(request({ username }));

    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error));
        dispatch(alertActions.error(error));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  return { type: userConstants.LOGOUT };
}

function getPlanets(planet) {
  return (dispatch) => {
    dispatch(request());

    userService.getPlanets(planet).then(
      (planetList) => dispatch(success(planetList)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: userConstants.GETPLANETS_REQUEST };
  }
  function success(planetList) {
    return { type: userConstants.GETPLANETS_SUCCESS, planetList };
  }
  function failure(error) {
    return { type: userConstants.GETPLANETS_FAILURE, error };
  }
}
