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

export default Book = ({ category, title, author, rating }) => {
  return (
    <Container>
      <Cover source={images.defaultCoverImg} resizeMode="stretch" />
      <Details>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <ReactionContainer>
          <Reaction rating={rating} />
          <Rating>{rating} rating</Rating>
        </ReactionContainer>
      </Details>
    </Container>
  );
};
