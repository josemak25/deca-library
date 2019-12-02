import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import customData from "../../meta";
import Screen from "./Screen";
import boxShadow from "../../utils/boxShadows";
import appTheme from "../../constants";
import renderButton from "./pagination";

export default function SplashScreen() {
  const [theme] = appTheme;

  const { splashScreens } = customData;

  const onDone = () => setShowApp(false);

  return (
    <AppIntroSlider
      renderItem={Screen}
      slides={splashScreens}
      onDone={onDone}
      dotStyle={{
        backgroundColor: theme.SVG_COLOR
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
        bottom: 225
      }}
      showNextButton={true}
      renderNextButton={renderButton("chevron-right", theme)}
      renderDoneButton={renderButton("check", theme)}
      // hidePagination={true}
    />
  );
}
