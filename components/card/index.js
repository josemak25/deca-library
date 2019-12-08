import React from "react";
import theme from "../../constants";
import boxShadow from "../../utils/boxShadows";

import { Container } from "./styles";

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
