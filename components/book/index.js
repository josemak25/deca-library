import React from "react";
import Reaction from "../reaction";

import {
  Container,
  Category,
  Cover,
  Details,
  Title,
  Author,
  ReactionContainer,
  Rating
} from "./styles";
import { images } from "../../meta";

export default Book = ({ book }) => {
  const {
    title,
    categories,
    authors,
    rating,
    imageLinks,
    ratingsCount,
    averageRating
  } = book.volumeInfo;

  return (
    <Container>
      <Cover source={{ uri: imageLinks.thumbnail }} resizeMode="stretch" />
      <Details>
        <Category>{categories[0]}</Category>
        <Title>{title}</Title>
        <Author>{authors[0]}</Author>
        <ReactionContainer>
          <Reaction averageRating={averageRating} />
          <Rating>{ratingsCount || 0} rating</Rating>
        </ReactionContainer>
      </Details>
    </Container>
  );
};
