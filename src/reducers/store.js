import { localStorageMiddleware, promiseMiddleware } from '../middleware/middleware'; 
import { applyMiddleware, createStore, combineReducers } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';                   // Saves state for persistent page refresh
import storage from 'redux-persist/lib/storage';                                // uses localStorage

import common from './common';

const rootReducer = combineReducers({
  common
});

const persistConfig = {
  key: 'root',
  storage,
};

const middleware = applyMiddleware(localStorageMiddleware, promiseMiddleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, middleware);
  let persistor = persistStore(store);
  return { store, persistor };
}