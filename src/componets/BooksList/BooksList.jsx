import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/BookAction';

import Book from './components/Book';

const BooksList = ({ data }) => {
  console.log('<BooksList/> render');

  return (
    <main className="main">
      {data.loading ? (
        <Book />
      ) : (
        <p className="main-loading">Получение данных с сервера...</p>
      )}
    </main>
  );
};

const mapStateToProps = store => ({
  data: store.books
});

export default connect(
  mapStateToProps,
  { getBooks }
)(BooksList);
