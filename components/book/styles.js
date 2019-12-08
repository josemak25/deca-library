import styled from "styled-components";
import theme, { fonts } from "../../constants";
const [colors] = theme;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const Cover = styled.Image`
  width: 25%;
  height: 100%;
  border-radius: 2;
`;

export const Details = styled.View`
  width: 65%;
  height: 100%;
  justify-content: space-between;
`;

export const Category = styled.Text`
  width: 30%;
  font-size: ${fonts.FONT_SIZE_SMALL};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.COLOR_BOOK_CATEGORY};
  text-transform: capitalize;
  text-align: center;
  padding: 5px;
  border-radius: 15;
  border: 1.5px ${colors.COLOR_BOOK_CATEGORY} solid;
  letter-spacing: 1;
`;

export const Title = styled.Text`
  font-size: ${fonts.FONT_SIZE_MEDIUM + 3};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  letter-spacing: 1;
  text-transform: capitalize;
`;

export const Author = styled.Text`
  font-size: ${fonts.FONT_SIZE_MEDIUM};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  letter-spacing: 1;
  opacity: 0.8;
`;

export const ReactionContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Rating = styled.Text`
  font-size: ${fonts.FONT_SIZE_MEDIUM};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  letter-spacing: 1;
  line-height: 18;
  margin-left: 10px;
`;
