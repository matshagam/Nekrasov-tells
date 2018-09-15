import React from 'react';

export const BookCard = ({ book, listView }) => {
  return (
    <div className="book">
      <h3 className="book-header-title">{book.title}</h3>
      <img src={book.image} alt="book" className="book-header-img" />
      <section className="book-text">
        {listView ? (
          <p className="book-text-description">
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
