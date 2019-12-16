import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import components from "../../components";
const { Card, Loading, Book, CarouselItem } = components;

import { Container, Header, Background, CarouselContainer } from "./styles";

const { width, height } = Dimensions.get("window");

const CONTENT_WIDTH = width - 40;
const CONTENT_HEIGHT = height * CONTENT_WIDTH;

import jsonBooks from "../../books.json";

import getBooks from "../../redux/actions/booksActions";

const Home = props => {
  const [library, setLibrary] = useState({
    books: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    // props.dispatch(getBooks());
    const { books, isLoading, error } = props.books;

    setLibrary({ ...library, books, isLoading, error });
  }, []);

  return library.isLoading ? (
    <Loading />
  ) : (
    <Container>
      <Background>
        <Header>Discover</Header>

        {/* scrolling carousel here */}
        <CarouselContainer>
          <Carousel
            data={jsonBooks.items}
            renderItem={CarouselItem}
            sliderWidth={CONTENT_WIDTH}
            itemWidth={CONTENT_WIDTH}
            itemHeight={CONTENT_HEIGHT}
            sliderHeight={CONTENT_HEIGHT}
          />
        </CarouselContainer>

        {/* scrolling carousel here */}

        <Card>
          <Book book={jsonBooks.items[23]} />
        </Card>
      </Background>
    </Container>
  );
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(Home);
