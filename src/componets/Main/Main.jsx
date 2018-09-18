import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/BookAction';

import { BookCard } from './components/bookCard';

class Main extends React.Component {
  state = {
    selectedFilter: this.props.filter.filter,
    listView: this.props.listView.listView
  };

  componentDidMount() {
    this.props.getBooks('', this.state.selectedFilter);
  }

  componentWillReceiveProps(nextProps) {
    const { filter } = nextProps.filter;
    const { search } = nextProps.search;

    if (filter !== this.state.selectedFilter) {
      this.setState(
        {
          selectedFilter: filter
        },
        () => this.props.getBooks('', filter)
      );
    }

    if (nextProps.listView) {
      this.setState({
        listView: nextProps.listView.listView
      });
    }

    if (search) {
      if (search.length > 1 || search.length < 1)
        this.props.getBooks(search, filter);
    }
  }

  render() {
    const { books } = this.props.books;
    return (
      <main className="main">
        {books.map((book, i) => {
          return (
            <BookCard book={book} listView={this.state.listView} key={i} />
          );
        })}
      </main>
    );
  }
}

const mapStateToProps = store => ({
  books: store.books,
  filter: store.filter,
  listView: store.listView,
  search: store.search
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Main);
