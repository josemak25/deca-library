import React from "react";
import { Container, Icon } from "./styles";
import { images } from "../../meta";

export default Reaction = ({ averageRating }) => {
  return (
    <Container>
      {Array(3)
        .fill({})
        .map((_, i) =>
          averageRating >= 5 ? (
            <Icon source={images.happyImg} resizeMode="contain" key={i} />
          ) : (
            <Icon source={images.sadImg} resizeMode="contain" key={i} />
          )
        )}
    </Container>
  );
};
