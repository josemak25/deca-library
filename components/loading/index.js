import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../constants";
const [colors] = theme;

import { Container } from "./styles";

export default Loading = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color={colors.PRIMARY_COLOR} />
    </Container>
  );
};
