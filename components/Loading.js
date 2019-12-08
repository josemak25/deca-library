import React from "react";
import styled from "styled-components";
import { ActivityIndicator } from "react-native";
import theme from "../constants";
const [colors] = theme;

export default Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
