import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Header } from "./styles";
import components from "../../components";

const { Card, Loading, Book } = components;
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
      <Header>Discover</Header>

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
    </Container>
  );
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(Home);
