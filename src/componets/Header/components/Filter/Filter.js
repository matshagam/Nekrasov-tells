import React from 'react';
import { connect } from 'react-redux';

import { changeFilter } from '../../../../actions/FilterActions';
import { FILTER, _toggleAttribute } from '../../../../helpers/functions';

import { Button } from '../../../reusable/Button';

class Filter extends React.Component {
  handleFilterChange = e => {
    let filterEvent = e.target.innerHTML;
    let filterButtons = document.querySelectorAll('.filter button');

    this.props.changeFilter(filterEvent);
    _toggleAttribute(filterButtons, filterEvent, 'disabled', 'disabled');
  };

  render() {
    console.log('Filter: ');
    return (
      <section className="filter">
        {FILTER.map((name, i) => {
          return (
            <Button
              toggleButton={this.handleFilterChange}
              name={name}
              key={i}
            />
          );
        })}
      </section>
    );
  }
}

export default connect(
  null,
  { changeFilter }
)(Filter);
