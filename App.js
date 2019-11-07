import React, { useState, useEffect } from 'react';
import AppRouter from './router';
import * as Font from 'expo-font';

export default function App() {
  const [isFontReady, setFontReady] = useState(false);
  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        'panton-bold': require('./assets/fonts/Panton-Bold.otf'),
        'panton-bold-regular': require('./assets/fonts/Panton-Bold-Regular.ttf'),
        'panton-regular': require('./assets/fonts/Panton-Regular.ttf'),
        'panton-light': require('./assets/fonts/Panton-Light.ttf'),
        'panton-thin': require('./assets/fonts/Panton-Thin.ttf')
      });
      setFontReady(true);
    };

    loadFont();
  }, [isFontReady]);

  return isFontReady ? <AppRouter /> : null;
}
