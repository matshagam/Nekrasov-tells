import React from 'react';
import { connect } from 'react-redux';
import { searchChanged } from '../../../actions/SearchAction';
import { getBooks } from '../../../actions/BookAction';

class Search extends React.Component {
  searchQueryChanged = event => {
    const { value } = event.target;
    const { filter } = this.props.filter;

    this.props.searchChanged(value);

    if (value.length > 1 || value.length < 1)
      this.props.getBooks(value, filter);
  };

  render() {
    const { search } = this.props.search;
    return (
      <form className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Поисковая строка"
          value={search}
          onChange={this.searchQueryChanged}
        />
      </form>
    );
  }
}

const mapStateToProps = store => ({
  search: store.search,
  filter: store.filter
});

export default connect(
  mapStateToProps,
  { searchChanged, getBooks }
)(Search);
