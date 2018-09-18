import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/BookAction';

import BookCard from './components/bookCard';

class Main extends React.Component {
  componentDidMount() {
    this.props.getBooks('', '');
  }

  componentWillReceiveProps(nextProps) {
    const { filter } = nextProps.filter;
    const { search } = this.props.search;

    if (filter !== this.props.filter.filter) {
      this.props.getBooks(search, filter);
    }
  }

  render() {
    const { listView } = this.props.listView;
    const { books } = this.props.books;
    return (
      <main className="main">
        {books.map((book, i) => {
          return <BookCard book={book} listView={listView} key={i} />;
        })}
      </main>
    );
  }
}

const mapStateToProps = store => ({
  books: store.books,
  listView: store.listView,
  filter: store.filter,
  search: store.search
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Main);
