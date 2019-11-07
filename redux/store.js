import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducer from './reducers';

export default function configureStore(preloadedState = {}) {
  const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };

  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, preloadedState, composedEnhancers);

  const persistor = persistStore(store);

  return { store, persistor };
}
