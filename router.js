import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/store";
import SplashScreens from "./screens/splash";

const { store, persistor } = configureStore();

export default function AppRouter() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SplashScreens />
      </PersistGate>
    </Provider>
  );
}
