import React from 'react';
import { connect } from 'react-redux';

import Book from './components/Book';

class BooksList extends React.Component {
  render() {
    console.log('<BooksList/> render');

    const { loading } = this.props.data;

    return (
      <main className="main">
        {loading ? (
          <Book />
        ) : (
          <p className="main-loading">Получение данных с сервера...</p>
        )}
      </main>
    );
  }
}

const mapStateToProps = store => ({
  data: store.books
});

export default connect(
  mapStateToProps,
  null
)(BooksList);
