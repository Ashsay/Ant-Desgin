import { combineReducers } from 'redux'

import users from './users';
import count from './count';

export default combineReducers({
  users,
  count
})