import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";

import rootReducer from "./reducers";

export default function configureStore() {
  const persistConfig = {
    key: "root",
    storage: AsyncStorage
  };

  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = compose(...enhancers);

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, composedEnhancers);

  const persistor = persistStore(store);

  return { store, persistor };
}
