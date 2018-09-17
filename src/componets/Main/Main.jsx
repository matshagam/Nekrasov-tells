import React from 'react';
import { connect } from 'react-redux';
import { BookCard } from './components/bookCard';

export class Main extends React.Component {
  render() {
    const { book, listView } = this.props.books;

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
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  console.log('store: ', store);

  return {
    books: store.books
  };
};
// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(mapStateToProps)(Main);
