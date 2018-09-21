import React from 'react';
import { connect } from 'react-redux';

import { getBooks } from '../../../actions/BookAction';
import { searchChanged } from '../../../actions/SearchAction';

const Search = ({ getBooks, searchChanged, filters }) => {
  return (
    <form className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Поисковая строка"
        onChange={e => {
          getBooks(e.target.value, filters.filter);
          searchChanged(e.target.value);
        }}
      />
    </form>
  );
};

const mapStateToProps = store => ({
  filters: store.filter
});

export default connect(
  mapStateToProps,
  { getBooks, searchChanged }
)(Search);
