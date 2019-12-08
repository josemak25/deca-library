import React from "react";
import theme from "../../constants";
import boxShadow from "../../utils/boxShadows";
import Icon from "../icon";

import { Container, SearchContainer, SearchInput } from "./styles";

const [colors] = theme;

export default Search = props => (
  <Container
    style={[
      boxShadow({ elevation: 1, color: colors.COLOR_CARD_SHADOW }),
      props.styles
    ]}
  >
    <SearchContainer>
      <IconContainer>
        <Icon name="ios-search" size={30} />
      </IconContainer>
      <SearchInput
        onChangeText={props.handleChange}
        value={props.value}
        placeholder="Search hundreds of books"
      />
    </SearchContainer>
  </Container>
);
