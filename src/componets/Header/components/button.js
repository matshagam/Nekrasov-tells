import React from 'react';
import { connect } from 'react-redux';

import { getBooks } from '../../../actions/BookAction';
import { changeFilter } from '../../../actions/FilterAction';
import { FILTER, _toggleAttribute } from '../../../helpers/functions';

class Button extends React.Component {
  componentDidMount() {
    document
      .querySelector('.filter')
      .children[0].setAttribute('disabled', 'disabled');
  }

  handleFilterChange = e => {
    let filterEvent = e.target.innerHTML;
    let filterButtons = document.querySelectorAll('.filter button');

    this.props.changeFilter(filterEvent);
    _toggleAttribute(filterButtons, filterEvent, 'disabled', 'disabled');
  };

  componentWillReceiveProps(nextProps) {
    const { filter } = nextProps.filter;
    const { search } = this.props.search;

    if (filter !== this.props.filter.filter) {
      this.props.getBooks(search, filter);
    }
  }

  render() {
    console.log('<Button/> render');

    return FILTER.map((name, i) => {
      return (
        <button key={i} onClick={this.handleFilterChange}>
          {name}
        </button>
      );
    });
  }
}

const mapStateToProps = store => ({
  filter: store.filter,
  search: store.search
});

export default connect(
  mapStateToProps,
  { changeFilter, getBooks }
)(Button);
