import React from 'react';

import { BookCard } from './components/bookCard';

export default class Main extends React.Component {
  render() {
    const { book, listView } = this.props;
    console.log('book, listView: ', book, listView);
    return (
      <main className="main">
        {book.map((data, i) => {
          return <BookCard book={data} listView={listView} key={i} />;
        })}
      </main>
    );
  }
}
