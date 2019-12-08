import React from "react";

import {
  Container,
  Background,
  SplashContent,
  SplashContentFooter,
  SplashContentHeader,
  BackgroundImage
} from "./styles";

import appTheme, { fonts } from "../../constants";

export default function Screen({ item }) {
  const [theme] = appTheme;

  return (
    <Container>
      <Background>
        <BackgroundImage source={item.image} resizeMode="contain" />
        <SplashContent>
          <SplashContentHeader
            color={theme.PRIMARY_COLOR}
            font={fonts.FONT_FAMILY_REGULAR}
          >
            {item.title}
          </SplashContentHeader>
          <SplashContentFooter
            color={theme.PRIMARY_COLOR}
            font={fonts.FONT_FAMILY_REGULAR}
          >
            {item.text}
          </SplashContentFooter>
        </SplashContent>
      </Background>
    </Container>
  );
}
