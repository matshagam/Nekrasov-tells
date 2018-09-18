import React from 'react';
import { connect } from 'react-redux';

import { changeFilter } from '../../../actions/FilterAction';
import { FILTER, _toggleAttribute } from '../../../helpers/functions';
import { Button } from '../../reusable/Button';

class Filter extends React.Component {
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
    console.log('<Filter/> render');
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
