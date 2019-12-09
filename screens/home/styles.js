import styled from "styled-components";
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
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 100;
`;

export const Header = styled.Text`
  font-size: ${fonts.FONT_SIZE_EXTRA_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  align-self: flex-start;
  letter-spacing: 1;
  line-height: 36;
  color: ${colors.SECONDARY_COLOR};
`;
