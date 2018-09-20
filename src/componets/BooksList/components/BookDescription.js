import React from 'react';

const BookDescription = ({ description }) => {
  console.log('<BookDescription/> render');

  return (
    <p
      className="book-text-description"
      style={description ? null : { margin: 'auto', opacity: 0.5 }}
    >
      {description ? description : 'Описания нет'}
    </p>
  );
};

export default BookDescription;
