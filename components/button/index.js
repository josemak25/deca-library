import React from "react";
import boxShadow from "../../utils/boxShadows";

import { Container } from "./styles";

export default function Button(props) {
  return (
    <Container style={[boxShadow({ elevation: 2 }), props.style]} {...props}>
      {props.children}
    </Container>
  );
}
