import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Header, Background, CarouselContainer } from "./styles";
import components from "../../components";

const { Card, Loading, Book, CarouselItem } = components;

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
          <CarouselItem
            item={{
              title: "dry",
              category: "drama",
              author: "Neal Shusterman",
              description:
                "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur",
              rating: "1004",
              imageLinks: {
                thumbnail:
                  "http://books.google.com/books/content?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73E8MHnwP1HoqWu3Z8F2OMWLreXQlfZYMlw1Q4fD3Slt_qf8GqcjrjuNHmgk3L4eFdRN8JWU2Q_bexRlxiSV7qLDfaLk0I79FP9aYNu0XX85_QuaVIS0ba6xeOX_z1LCxGpxomJ&source=gbs_api"
              }
            }}
          />
        </CarouselContainer>

        {/* scrolling carousel here */}

        <Card>
          <Book
            {...{
              title: "dry",
              category: "drama",
              author: "Neal Shusterman",
              rating: "1004"
            }}
          />
        </Card>
      </Background>
    </Container>
  );
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(Home);
