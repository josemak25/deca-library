import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./redux/store";
import AppRouter from "./router";
import * as Font from "expo-font";

export default function App() {
  const [isFontReady, setFontReady] = useState(false);

  const { store, persistor } = configureStore();

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "panton-bold": require("./assets/fonts/Panton-Bold.otf"),
        "panton-bold-regular": require("./assets/fonts/Panton-Bold-Regular.ttf"),
        "panton-regular": require("./assets/fonts/Panton-Regular.ttf"),
        "panton-light": require("./assets/fonts/Panton-Light.ttf"),
        "panton-thin": require("./assets/fonts/Panton-Thin.ttf")
      });
      setFontReady(true);
    };

    loadFont();
  }, [isFontReady]);

  return isFontReady ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  ) : null;
}
