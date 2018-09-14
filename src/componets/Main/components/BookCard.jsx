import React from 'react';

export const BookCard = ({ book, changeView }) => {
  return (
    <div className="book">
      <h3 className="book-title">{book.title}</h3>
      <img src={book.image} alt="book" className="book-img" />
      <section className="book-text">
        {book.description !== null && changeView ? (
          <p className="book-text-description">{book.description}</p>
        ) : null}
        <p className="book-text-year">{book.year}</p>
        <p className="book-text-author">{book.author}</p>
      </section>
    </div>
  );
};
