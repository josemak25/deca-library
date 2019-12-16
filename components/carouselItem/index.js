import React from "react";
import Card from "../card";
import boxShadow from "../../utils/boxShadows";
import BookmarkIcon from "./bookmark";

import { Head, Body, Thumbnail, Category, Title, Description } from "./styles";

import theme from "../../constants";
const [colors] = theme;

export default CarouselItem = ({ item, index }) => {
  const {
    imageLinks,
    categories,
    title,
    description,
    subtitle
  } = item.volumeInfo;

  return (
    <Card
      styles={[
        {
          flex: 1,
          marginBottom: 20,
          position: "relative",
          overFlow: "show"
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
          source={{ uri: imageLinks.thumbnail }}
          resizeMode="stretch"
        />
        <BookmarkIcon
          style={[
            { position: "absolute", top: -65, right: 20 },
            boxShadow({
              elevation: 5,
              color: colors.SECONDARY_COLOR,
              opacity: 0.4,
              height: 3
            })
          ]}
        />
      </Head>
      <Body>
        <Category>{categories[0]}</Category>
        <Title>{title}</Title>
        <Description>
          {description ? description.substr(0, 50) : subtitle}...
        </Description>
      </Body>
    </Card>
  );
};
