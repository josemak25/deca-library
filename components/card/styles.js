import styled from "styled-components";
import theme from "../../constants";
const [colors] = theme;

export const Container = styled.TouchableOpacity`
  min-width: 100%;
  min-height: 160;
  justify-content: center;
  align-items: center;
  background-color: ${colors.COLOR_WHITE};
  border-radius: 10;
`;
