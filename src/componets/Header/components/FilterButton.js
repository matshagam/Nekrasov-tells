import React from 'react';

import { connect } from 'react-redux';

import { changeFilter } from '../../../actions/FilterAction';
import { getBooks } from '../../../actions/BookAction';
class FilterButton extends React.Component {
  state = {
    filter: 1
  };

  handleFilterChange = event => {
    let filterEvent = event.target.innerHTML;

    filterEvent =
      filterEvent === 'Везде'
        ? ''
        : filterEvent === 'Книги'
          ? 1
          : filterEvent === 'Периодика'
            ? 2
            : null;

    this.props.getBooks(this.props.search.query, filterEvent);
    this.props.changeFilter(filterEvent);
    this.setState({
      filter: +event.target.getAttribute('id')
    });
  };

  renderButtons = () => {
    const { filter } = this.state;
    const FILTER = [
      { id: 1, name: 'Везде' },
      { id: 2, name: 'Книги' },
      { id: 3, name: 'Периодика' }
    ];

    return (
      <React.Fragment>
        {FILTER.map(({ id, name }) => (
          <button
            disabled={id === filter ? true : false}
            key={id}
            id={id}
            onClick={this.handleFilterChange}
          >
            {name}
          </button>
        ))}
      </React.Fragment>
    );
  };

  render() {
    console.log('in Header <Button/> render');

    return this.renderButtons();
  }
}

const mapStateToProps = store => ({
  search: store.query
});

export default connect(
  mapStateToProps,
  { getBooks, changeFilter }
)(FilterButton);
