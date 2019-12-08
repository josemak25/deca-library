import styled from "styled-components";
import theme, { fonts } from "../../constants";
const [colors] = theme;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;

export const Category = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  padding: 0 10px;
  width: 90%;
  height: 100%;
  letter-spacing: 1;
  line-height: 18;
`;

export const Title = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  padding: 0 10px;
  width: 90%;
  height: 100%;
  letter-spacing: 1;
  line-height: 18;
`;

export const Author = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  padding: 0 10px;
  width: 90%;
  height: 100%;
  letter-spacing: 1;
  line-height: 18;
`;

export const Reaction = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  border: 1px solid;
`;

export const Rating = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  padding: 0 10px;
  width: 90%;
  height: 100%;
  letter-spacing: 1;
  line-height: 18;
`;
