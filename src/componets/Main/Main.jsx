import React from 'react';
import { BookCard } from './components/BookCard';

import { Context } from '../../store/ContextStore';

export const Main = () => {
  return (
    <main className="main">
      <Context.Consumer>
        {({ books, changeView }) => {
          return books.map((book, index) => {
            return <BookCard book={book} changeView={changeView} key={index} />;
          });
        }}
      </Context.Consumer>
    </main>
  );
};
