import React from 'react';

import { connect } from 'react-redux';

import { changeFilter } from '../../../actions/FilterAction';
import { getBooks } from '../../../actions/BookAction';

const FilterButton = ({ getBooks, changeFilter, search, filters }) => {
  let filter = 1;

  const handleFilterChange = event => {
    let filterEvent = event.target.innerHTML;

    filterEvent =
      filterEvent === 'Везде'
        ? ''
        : filterEvent === 'Книги'
          ? 1
          : filterEvent === 'Периодика'
            ? 2
            : null;

    changeFilter(filterEvent);
    getBooks(search.query, filterEvent);
  };

  filter = filters.filter === '' ? 1 : filters.filter + 1;

  const FILTER = [
    { id: 1, name: 'Везде' },
    { id: 2, name: 'Книги' },
    { id: 3, name: 'Периодика' }
  ];

  return FILTER.map(({ id, name }) => (
    <button
      disabled={id === filter ? true : false}
      key={id}
      id={id}
      onClick={event => {
        handleFilterChange(event);
      }}
    >
      {name}
    </button>
  ));
};

const mapStateToProps = store => ({
  search: store.query,
  filters: store.filter
});

export default connect(
  mapStateToProps,
  { getBooks, changeFilter }
)(FilterButton);
