import styled from "styled-components";
import theme, { fonts } from "../../constants";
const [colors] = theme;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.COLOR_BACKGROUND};
  align-items: center;
  padding: 0 15px;
  padding-top: 15px;
`;

export const Header = styled.Text`
  font-size: ${fonts.FONT_SIZE_EXTRA_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  align-self: flex-start;
  letter-spacing: 1;
  line-height: 36;
  color: ${colors.SECONDARY_COLOR};
`;
