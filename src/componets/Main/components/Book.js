import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../../actions/BookAction';

import Description from './book.description';

class BookCard extends React.Component {
  componentDidMount() {
    this.props.getBooks('', '');
  }

  componentWillReceiveProps(nextProps) {
    const { filter } = nextProps.filter;
    const { search } = this.props.search;

    if (filter !== this.props.filter.filter) {
      this.props.getBooks(search, filter);
    }
  }
  render() {
    console.log('<BookCard/> render');

    const { listView } = this.props.listView;
    const { books } = this.props.books;
    return (
      <React.Fragment>
        {books.map((book, i) => {
          return (
            <div className="book" key={i}>
              <h3 className="book-title">{book.title}</h3>
              <img src={book.image} alt="book" className="book-image" />
              <section className="book-text">
                {listView ? (
                  <Description description={book.description} />
                ) : null}
                <div className="book-text-footer">
                  <p className="book-text-footer-year">{book.year}</p>
                  <p className="book-text-footer-author">{book.author}</p>
                </div>
              </section>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = store => ({
  books: store.books,
  listView: store.listView,
  filter: store.filter,
  search: store.search
});

export default connect(
  mapStateToProps,
  { getBooks }
)(BookCard);
