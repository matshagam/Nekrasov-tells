import React from 'react';

const BookDescription = ({ description }) => {
  console.log('<Description/> render');

  return (
    <p
      className="book-text-description"
      style={description === null ? { margin: 'auto', opacity: 0.5 } : null}
    >
      {description !== null ? description : 'Описания нет'}
    </p>
  );
};

export default BookDescription;
