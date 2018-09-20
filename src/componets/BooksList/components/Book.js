import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../../actions/BookAction';

import BookDescription from './BookDescription';

class Book extends React.Component {
  componentWillUpdate(nextProps) {
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
        {books.map(({ title, description, image, author, year }, i) => (
          <div className={listView ? 'book list-view' : 'book'} key={year + i}>
            <h3 className="book-title">{title}</h3>
            <img src={image} alt="book" className="book-image" />
            <section className="book-text">
              {listView ? <BookDescription description={description} /> : null}
              <div className="book-text-footer">
                <p className="book-text-footer-year">{year}</p>
                <p className="book-text-footer-author">{author}</p>
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
