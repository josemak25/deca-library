import styled from "styled-components";
import { Platform } from "react-native";
import theme from "../../constants";
const [colors] = theme;

export const Head = styled.View`
  width: 100%;
  height: 250px;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  top: -15;
`;

export const Thumbnail = styled.Image`
  width: 95%;
  height: 100%;
  border-width: 0.5px;
  border-color: ${colors.COLOR_CARD_SHADOW};
  border-radius: ${Platform.OS == "ios" ? 5 : 0.5}px;
`;
