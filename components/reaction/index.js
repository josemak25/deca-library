import React from "react";
import { Container, Icon } from "./styles";
import { images } from "../../meta";

export default Reaction = ({ rating }) => {
  return (
    <Container>
      {Array(3)
        .fill({})
        .map((_, i) =>
          +rating >= 500 ? (
            <Icon source={images.happy} resizeMode="contain" key={i} />
          ) : (
            <Icon source={images.sad} resizeMode="contain" key={i} />
          )
        )}
    </Container>
  );
};
