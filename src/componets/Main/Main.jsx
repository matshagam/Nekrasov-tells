import React from 'react';

import { BookCard } from './components/bookCard';

export const Main = ({ book, listView }) => {
  return (
    <main className="main">
      <BookCard
        book={book}
        listView={listView}
        // changeView={changeView}
        // key={index}
      />
    </main>
  );
};
