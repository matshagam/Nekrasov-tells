import React from 'react';

const BookDescription = ({ description }) => {
  console.log('<BookDescription/> render');

  return (
    <p
      className="book-text-description"
      style={!description ? { margin: 'auto', opacity: 0.5 } : null}
    >
      {!description ? 'Описания нет' : description}
    </p>
  );
};

export default BookDescription;
