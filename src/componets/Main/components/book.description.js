import React from 'react';

const Description = ({ description }) => {
  return (
    <p
      className="book-text-description"
      style={description === null ? { margin: 'auto', opacity: 0.5 } : null}
    >
      {description !== null ? description : 'Описания нет'}
    </p>
  );
};

export default Description;
