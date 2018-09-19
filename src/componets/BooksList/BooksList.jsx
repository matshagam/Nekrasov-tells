import React from 'react';

import Book from './components/Book';

const BooksList = () => {
  console.log('<Main/> render');

  return (
    <main className="main">
      <Book />;
    </main>
  );
};

export default BooksList;
