import styled from "styled-components";
import theme from "../../constants";
const [colors] = theme;

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 160;
  justify-content: center;
  align-items: center;
  background-color: ${colors.COLOR_WHITE};
  border-radius: 10;
`;
