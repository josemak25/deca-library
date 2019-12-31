import React from "react";
import Button from "../button";
import boxShadow from "../../utils/boxShadows";
import BookmarkIcon from "./bookmark";

import { Head, Thumbnail } from "./styles";

import theme from "../../constants";
const [colors] = theme;

export default function CarouselItem({ item }) {
  const { imageLinks } = item.volumeInfo;

  const handleBookmark = ({ id }) => {};

  return (
    <Head>
      <Thumbnail source={{ uri: imageLinks.thumbnail }} resizeMode="stretch" />
      <Button
        style={[
          {
            width: 50,
            height: 50,
            position: "absolute",
            top: 20,
            right: 20,
            borderRadius: 49 / 2
          },
          boxShadow({
            elevation: 5,
            color: colors.SECONDARY_COLOR,
            opacity: 0.4,
            height: 3
          })
        ]}
        onPress={() => handleBookmark(item)}
      >
        <BookmarkIcon />
      </Button>
    </Head>
  );
}
