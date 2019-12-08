import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Welcome } from "./styles";
import getBooks from "../../redux/actions/booksActions";

const Home = props => {
  const [library, setLibrary] = useState({
    books: [],
    isLoading: true,
    error: null
  });

  useEffect(() => {
    props.dispatch(getBooks());
    const { books, isLoading, error } = props.books;
    setLibrary({ ...library, books, isLoading, error });
  }, []);

  return library.isLoading ? (
    <Container>
      <Welcome>Loading...</Welcome>
    </Container>
  ) : (
    <Container>
      <Welcome>Home</Welcome>
    </Container>
  );
};

const mapStateToProps = state => ({ books: state.books });

export default connect(mapStateToProps)(Home);
