import React, { useState } from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import customData from "../../meta";
import Screen from "./Screen";
import boxShadow from "../../utils/boxShadows";
import appTheme from "../../constants";
import { NextButton, DoneButton } from "./pagination";

export default function SplashScreen({ navigation }) {
  const [appSlider, setAppSlider] = useState({});
  const [currentScreen, setCurrentScreen] = useState(null);

  const handleChange = () => {
    appSlider.goToSlide(currentScreen + 1);
    setCurrentScreen(currentScreen + 1);
  };

  const { navigate } = navigation;

  const [theme] = appTheme;

  const { splashScreens } = customData;

  return (
    <AppIntroSlider
      renderItem={Screen}
      slides={splashScreens}
      dotStyle={{
        backgroundColor: theme.SVG_COLOR,
        width: 10,
        height: 10,
        marginLeft: 10,
        marginRight: 10
      }}
      activeDotStyle={{
        backgroundColor: theme.PRIMARY_COLOR,
        width: 28,
        height: 8,
        alignSelf: "center",
        borderRadius: 100,
        ...boxShadow({ elevation: 6, color: theme.SHADOW_COLOR })
      }}
      paginationStyle={{
        position: "absolute",
        bottom: 200
      }}
      renderNextButton={NextButton({ theme, handleChange })}
      renderDoneButton={DoneButton({ theme, navigate })}
      onSlideChange={index => setCurrentScreen(index)}
      ref={ref => setAppSlider(ref)}
    />
  );
}
