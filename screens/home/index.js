import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Header } from "./styles";
import getBooks from "../../redux/actions/booksActions";
import Card from "../../components/Card";
import Loading from "../../components/Loading";

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

      <Card></Card>
    </Container>
  );
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(Home);
