import styled from "styled-components";
import theme, { fonts } from "../../constants";
const [colors] = theme;

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
`;

export const TabTitle = styled.Text`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  letter-spacing: 1;
  line-height: 18;
  text-transform: capitalize;
`;

export const activeTabStyle = {
  width: "5%",
  height: 6,
  backgroundColor: colors.PRIMARY_COLOR,
  position: "absolute",
  bottom: 0
};

export const tabStyle = {
  flexDirection: "row",
  justifyContent: "flex-start"
};
