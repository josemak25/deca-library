import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import theme, { fonts } from "../constants";
import boxShadow from "../utils/boxShadows";
import Icon from "./Icon";

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

const Container = styled.View`
  flex-direction: row;
  min-height: 100;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  background-color: ${colors.COLOR_BACKGROUND};
`;

const SearchContainer = styled.View`
  background-color: ${colors.COLOR_WHITE};
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
  border-radius: 5;
  width: 100%;
  height: 50%;
`;

const IconContainer = styled.View`
  width: 10%;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.TextInput`
  font-size: ${fonts.FONT_SIZE_LARGE};
  font-family: ${fonts.FONT_FAMILY_REGULAR_BOLD};
  color: ${colors.SECONDARY_COLOR};
  padding: 0 10px;
  width: 90%;
  height: 100%;
  letter-spacing: 1;
  line-height: 18;
`;
