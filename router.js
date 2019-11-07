import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './redux/store';
import ScreenOne from './views/splashScreen/screenOne';

const { store, persistor } = configureStore();

export default function AppRouter() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScreenOne />
      </PersistGate>
    </Provider>
  );
}
