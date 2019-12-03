import React from "react";
import styled from "styled-components";
import boxShadow from "../utils/boxShadows";

export default function Button(props) {
  return (
    <Container style={[boxShadow({ elevation: 2 }), props.style]} {...props}>
      {props.children}
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  min-width: 40;
  min-height: 40;
  justify-content: center;
  align-items: center;
`;
