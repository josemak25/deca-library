import styled from "styled-components";
import theme, { fonts } from "../../constants";
const [colors] = theme;

export const Head = styled.View`
  flex: 1.5;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

export const Body = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 0 25px;
`;

export const Thumbnail = styled.Image`
  width: 93%;
  height: 100%;
  position: relative;
  border-width: 0.5px;
  border-color: ${colors.COLOR_CARD_SHADOW};
  border-radius: 5px;
`;

export const Category = styled.Text`
  font-size: ${fonts.FONT_SIZE_MEDIUM};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.COLOR_BOOK_CATEGORY};
  letter-spacing: 1;
  line-height: 19;
`;

export const Title = styled.Text`
  font-size: ${fonts.FONT_SIZE_EXTRA_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  letter-spacing: 1;
  margin-top: 10px;
  text-transform: capitalize;
`;

export const Description = styled.Text`
  font-size: ${fonts.FONT_SIZE_MEDIUM};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  margin-top: 10px;
  letter-spacing: 1;
  opacity: 0.8;
`;
