import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import components from "../../components";
const { Card, Loading, Book, CarouselItem } = components;

import {
  Container,
  Header,
  Background,
  CarouselContainer,
  Body,
  Category,
  Title,
  Description,
  carouselBackgroundStyle
} from "./styles";

const { width, height } = Dimensions.get("window");

const CONTENT_WIDTH = width - 40;
const CONTENT_HEIGHT = height / 7;

import jsonBooks from "../../books.json";

import getBooks from "../../redux/actions/booksActions";

const Home = props => {
  const [library, setLibrary] = useState({
    books: [],
    isLoading: true,
    error: null
  });

  const [curScrollItem, setCurScrollItem] = useState({
    book: jsonBooks.items[0].volumeInfo,
    bookIndex: 0
  });

  useEffect(() => {
    // props.dispatch(getBooks());
    const { books, isLoading, error } = props.books;

    setLibrary({ ...library, books, isLoading, error });
  }, []);

  const handleScroll = index => {
    console.log(index);
    setCurScrollItem({
      ...curScrollItem,
      bookIndex: index,
      book: jsonBooks.items[index].volumeInfo
    });
  };

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
            sliderWidth={width}
            itemWidth={CONTENT_WIDTH}
            sliderHeight={CONTENT_HEIGHT}
            layoutCardOffset={18}
            inactiveSlideOpacity={1}
            inactiveSlideScale={1}
            onSnapToItem={handleScroll}
          />
        </CarouselContainer>
        {/* scrolling carousel here */}

        <Card styles={carouselBackgroundStyle}>
          <Body>
            <Category>{curScrollItem.book.categories}</Category>
            <Title>{curScrollItem.book.title}</Title>
            <Description>
              {curScrollItem.book.description
                ? curScrollItem.book.description.substr(0, 50)
                : curScrollItem.book.subtitle}
              ...
            </Description>
          </Body>
        </Card>

        <Card>
          <Book book={jsonBooks.items[0]} />
        </Card>
      </Background>
    </Container>
  );
};

const mapStateToProps = ({ books }) => ({ books });

export default connect(mapStateToProps)(Home);
