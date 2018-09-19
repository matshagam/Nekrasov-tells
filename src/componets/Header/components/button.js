import React from 'react';
import { connect } from 'react-redux';

import { changeFilter } from '../../../actions/FilterAction';
import { FILTER, _toggleAttribute } from '../../../helpers/functions';

class Button extends React.Component {
  constructor() {
    super();
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

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

  render() {
    console.log('<Button/> render');

    return FILTER.map(name => {
      return (
        <button
          key={name.id}
          id={'filter-btn-' + name.id}
          onClick={this.handleFilterChange}
        >
          {name.name}
        </button>
      );
    });
  }
}

export default connect(
  null,
  { changeFilter }
)(Button);
