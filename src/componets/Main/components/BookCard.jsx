import React from 'react';

export const BookCard = ({ title, image, description, year, author }) => {
  return (
    <div className="book">
      <h3 className="book-title">{title}</h3>
      <img src={image} alt="" className="book-img" />
      <p className="book-description">{description}</p>
      <p className="book-year">{year}</p>
      <p className="book-author">{author}</p>
    </div>
  );
};
