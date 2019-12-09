import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./item";

export default Carousel = ({ books }) => {
  const [discover, setDiscover] = useState({});

  return (
    <Carousel
      ref={c => setDiscover({ ...discover, ...c })}
      data={books}
      renderItem={CarouselItem}
      sliderWidth={100}
      itemWidth={100}
    />
  );
};
