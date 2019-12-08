import React from "react";
import styled from "styled-components";
import theme from "../constants";
import boxShadow from "../utils/boxShadows";

const [colors] = theme;

export default Card = props => (
  <Container
    style={[
      boxShadow({ elevation: 1, color: colors.COLOR_CARD_SHADOW }),
      props.styles
    ]}
  >
    {props.children}
  </Container>
);

const Container = styled.TouchableOpacity`
  min-width: 100%;
  min-height: 160;
  justify-content: center;
  align-items: center;
  background-color: ${colors.COLOR_WHITE};
  border-radius: 10;
`;
