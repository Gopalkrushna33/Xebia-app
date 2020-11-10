import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { planetList } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  planetList,
  alert
});

export default rootReducer;