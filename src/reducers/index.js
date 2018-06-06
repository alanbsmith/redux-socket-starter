import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import score from './score';
import sockets from './sockets';

export default combineReducers({
  routing,
  score,
  sockets,
});
