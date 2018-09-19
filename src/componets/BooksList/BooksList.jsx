import React from 'react';

import Book from './components/Book';

const BooksList = () => {
  console.log('<BooksList/> render');

  return (
    <main className="main">
      <Book />;
    </main>
  );
};

export default BooksList;
