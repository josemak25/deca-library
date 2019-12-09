import React from "react";
import Card from "../card";
import boxShadow from "../../utils/boxShadows";

import { Head, Body, Thumbnail, Category, Title, Description } from "./styles";

import theme from "../../constants";
const [colors] = theme;

export default CarouselItem = ({ item, index }) => {
  return (
    <Card
      styles={[
        {
          height: 376,
          marginBottom: 20,
          position: "relative"
        },
        boxShadow({
          elevation: 10,
          color: colors.COLOR_CARD_SHADOW,
          opacity: 0.6,
          height: 6
        })
      ]}
    >
      <Head>
        <Thumbnail
          source={{ uri: item.imageLinks.thumbnail }}
          resizeMode="stretch"
        />
      </Head>
      <Body>
        <Category>{item.category}</Category>
        <Title>{item.title}</Title>
        <Description>{item.description.substr(0, 80)}...</Description>
      </Body>
    </Card>
  );
};
