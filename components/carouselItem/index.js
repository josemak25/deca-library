import React from "react";
import boxShadow from "../../utils/boxShadows";
import BookmarkIcon from "./bookmark";

import { Head, Thumbnail } from "./styles";

import theme from "../../constants";
const [colors] = theme;

export default function CarouselItem({ item }) {
  const { imageLinks } = item.volumeInfo;
  return (
    <Head>
      <Thumbnail source={{ uri: imageLinks.thumbnail }} resizeMode="stretch" />
      <BookmarkIcon
        style={[
          { position: "absolute", top: 20, right: 20 },
          boxShadow({
            elevation: 5,
            color: colors.SECONDARY_COLOR,
            opacity: 0.4,
            height: 3
          })
        ]}
      />
    </Head>
  );
}
