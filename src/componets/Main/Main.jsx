import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/BookAction';

import { BookCard } from './components/bookCard';

class Main extends React.Component {
  componentDidMount() {
    this.props.getBooks('', '');
  }

  render() {
    const { books } = this.props;
    return (
      <main className="main">
        {books.books.map((data, i) => {
          return <BookCard book={data} listView={false} key={i} />;
        })}
      </main>
    );
  }
}

const mapStateToProps = store => ({
  books: store.books
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Main);
