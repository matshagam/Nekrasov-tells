import React from 'react';
import { connect } from 'react-redux';

import BookDescription from './BookDescription.jsx';

const Book = ({ view, data }) => {
  return data.books.map((book, i) => {
    return (
      <div
        className={view.listView ? 'book list-view' : 'book'}
        key={book.year + i}
      >
        <h3 className="book-title">{book.title}</h3>
        <img src={book.image} alt="book" className="book-image" />
        <section className="book-text">
          {view.listView ? (
            <BookDescription description={book.description} />
          ) : null}
          <div className="book-text-footer">
            <p className="book-text-footer-year">{book.year}</p>
            <p className="book-text-footer-author">{book.author}</p>
          </div>
        </section>
      </div>
    );
  });
};

const mapStateToProps = store => ({
  data: store.books,
  view: store.listView
});

export default connect(
  mapStateToProps,
  null
)(Book);
