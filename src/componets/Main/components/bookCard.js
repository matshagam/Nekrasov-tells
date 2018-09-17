import React from 'react';

export const BookCard = ({ book, listView }) => {
  return (
    <div className="book">
      <h3 className="book-title">{book.title}</h3>
      <img src={book.image} alt="book" className="book-image" />
      <section className="book-text">
        {listView ? (
          <p
            className="book-text-description"
            style={
              book.description === null
                ? { margin: 'auto', opacity: 0.5 }
                : null
            }
          >
            {book.description !== null ? book.description : 'Описания нет'}
          </p>
        ) : null}
        <div className="book-text-footer">
          <p className="book-text-footer-year">{book.year}</p>
          <p className="book-text-footer-author">{book.author}</p>
        </div>
      </section>
    </div>
  );
};
