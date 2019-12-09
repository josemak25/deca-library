import styled from "styled-components";
import theme, { fonts } from "../../constants";
const [colors] = theme;

export const Container = styled.View`
  flex-direction: row;
  min-height: 100;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-color: ${colors.COLOR_BACKGROUND};
`;

export const SearchContainer = styled.View`
  background-color: ${colors.COLOR_WHITE};
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  border-radius: 5;
  width: 100%;
  height: 50%;
`;

export const IconContainer = styled.View`
  width: 10%;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  padding: 0 10px;
  width: 90%;
  height: 100%;
  letter-spacing: 1;
  line-height: 18;
`;
