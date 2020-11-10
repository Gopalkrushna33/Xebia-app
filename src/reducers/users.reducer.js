import { userConstants } from "../constants";

export function planetList(state = {}, action) {
  switch (action.type) {
    case userConstants.GETPLANETS_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETPLANETS_SUCCESS:
      return {
        items: action.planetList,
      };
    case userConstants.GETPLANETS_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
}
