import { combineReducers } from 'redux';

import videos from './videos';
import navigation from './navigation';

const reducer = combineReducers({
  navigation,
  videos,
})

export default reducer;
