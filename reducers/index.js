import { combineReducers } from 'redux';

import videos from './videos';
import navigation from './navigation';
import user from './user';

const reducer = combineReducers({
  navigation,
  videos,
  user,
})

export default reducer;
