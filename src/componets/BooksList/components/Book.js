import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../../actions/BookAction';

import BookDescription from './BookDescription';

class Book extends React.Component {
  componentDidMount() {
    const { filter } = this.props.filters;
    const { query } = this.props.search;

    this.props.getBooks(query, filter);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { filter } = nextProps.filters;
    const { query } = nextProps.search;

    if (
      filter !== this.props.filters.filter ||
      query !== this.props.search.query
    ) {
      this.props.getBooks(query, filter);
    }
  }

  renderBooks = () => {
    const { books } = this.props.data;
    const { listView } = this.props.view;

    return (
      <React.Fragment>
        {books.map((book, i) => (
          <div
            className={!listView ? 'book' : 'book list-view'}
            key={book.year + i}
          >
            <h3 className="book-title">{book.title}</h3>
            <img src={book.image} alt="book" className="book-image" />
            <section className="book-text">
              <BookDescription description={book.description} />
              <div className="book-text-footer">
                <p className="book-text-footer-year">{book.year}</p>
                <p className="book-text-footer-author">{book.author}</p>
              </div>
            </section>
          </div>
        ))}
      </React.Fragment>
    );
  };

  render() {
    console.log('<Book/> render');
    return this.renderBooks();
  }
}

const mapStateToProps = store => ({
  data: store.books,
  filters: store.filter,
  search: store.query,
  view: store.listView
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Book);
