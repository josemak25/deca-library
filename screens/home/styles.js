import styled from "styled-components";
import { Platform } from "react-native";
import boxShadow from "../../utils/boxShadows";
import theme, { fonts } from "../../constants";
const [colors] = theme;

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.COLOR_BACKGROUND};
`;

export const Background = styled.View`
  flex: 1;
  background-color: ${colors.COLOR_BACKGROUND};
  align-items: center;
  padding: 0 20px;
  padding-top: 15px;
`;

export const CarouselContainer = styled.View`
  height: 400;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 15;
  position: relative;
`;

export const Header = styled.Text`
  font-size: ${fonts.FONT_SIZE_EXTRA_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  align-self: flex-start;
  letter-spacing: 1;
  line-height: 36;
  color: ${colors.SECONDARY_COLOR};
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 0 25px;
`;

export const Category = styled.Text`
  font-size: ${fonts.FONT_SIZE_MEDIUM};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.COLOR_BOOK_CATEGORY};
  letter-spacing: 1;
  line-height: 19;
  margin-top: 185;
`;

export const Title = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  letter-spacing: 1;
  margin-top: 5px;
  text-transform: capitalize;
`;

export const Description = styled.Text`
  font-size: ${fonts.FONT_SIZE_SMALL};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  margin-top: 5px;
  letter-spacing: 1;
  opacity: 0.8;
`;

export const carouselBackgroundStyle = [
  {
    flex: 1,
    position: "absolute",
    height: 320,
    zIndex: -1,
    top: 110
  },
  boxShadow({
    elevation: Platform.OS == "ios" ? 10 : 0,
    color: Platform.OS == "ios" ? colors.COLOR_CARD_SHADOW : colors.COLOR_WHITE,
    height: 6
  })
];
