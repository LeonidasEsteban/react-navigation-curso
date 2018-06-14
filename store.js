import {
  createStore,
  applyMiddleware,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import reducer from './reducers/index';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['navigation', 'suggestionList', 'categoryList']
}


const persistedReducer = persistReducer(persistConfig, reducer)


const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navigation,
);

const store = createStore(
  persistedReducer,
  applyMiddleware(middleware)
)
const persistor = persistStore(store)

export { store, persistor };
