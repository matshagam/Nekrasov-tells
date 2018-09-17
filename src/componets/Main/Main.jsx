import React from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../../actions/BookAction';

import { BookCard } from './components/bookCard';

class Main extends React.Component {
  state = {
    selectedFilter: this.props.filter.filter
  };

  componentDidMount() {
    this.props.getBooks('', this.state.selectedFilter);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { filter } = nextProps.filter;

    if (filter !== this.state.selectedFilter) {
      this.setState(
        {
          selectedFilter: filter
        },
        () => this.props.getBooks('', filter)
      );
    }
  }

  render() {
    console.log('Main: ');

    const { books } = this.props.books;
    return (
      <main className="main">
        {books.map((data, i) => {
          return <BookCard book={data} listView={false} key={i} />;
        })}
      </main>
    );
  }
}

const mapStateToProps = store => ({
  books: store.books,
  filter: store.filter
});

export default connect(
  mapStateToProps,
  { getBooks }
)(Main);
