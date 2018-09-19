import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../../actions/BookAction';

import Description from './book.description';

class BookCard extends React.Component {
  componentDidMount() {
    this.props.getBooks('', '');
  }

  componentWillReceiveProps(nextProps) {
    const { filter } = nextProps.filters;
    const { query } = nextProps.search;

    // console.log(
    //   'books filter: ',
    //   nextProps.filters.filter,
    //   this.props.filters.filter
    // );

    // console.log(
    //   'books query: ',
    //   nextProps.search.query,
    //   this.props.search.query
    // );

    if (
      filter !== this.props.filters.filter ||
      query !== this.props.search.query
    ) {
      this.props.getBooks(query, filter);
    }
  }

  render() {
    console.log('<BookCard/> render');

    const { books } = this.props.books;

    return books.map((book, i) => {
      return (
        <div className="book" key={book.year + i}>
          <h3 className="book-title">{book.title}</h3>
          <img src={book.image} alt="book" className="book-image" />
          <section className="book-text">
            <Description description={book.description} />
            <div className="book-text-footer">
              <p className="book-text-footer-year">{book.year}</p>
              <p className="book-text-footer-author">{book.author}</p>
            </div>
          </section>
        </div>
      );
    });
  }
}

const mapStateToProps = store => ({
  books: store.books,
  filters: store.filter,
  search: store.query
});

export default connect(
  mapStateToProps,
  { getBooks }
)(BookCard);
