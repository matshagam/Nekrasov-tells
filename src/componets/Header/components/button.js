import React from 'react';
import { connect } from 'react-redux';

import { changeFilter } from '../../../actions/FilterAction';
import { FILTER } from '../../../helpers/functions';

class Button extends React.Component {
  state = {
    filter: 1
  };

  handleFilterChange = event => {
    let filterEvent = event.target.innerHTML;
    this.props.changeFilter(filterEvent);
    this.setState({
      filter: +event.target.getAttribute('id')
    });
  };

  renderButtons = () => {
    const filter = this.state.filter;

    return (
      <React.Fragment>
        {FILTER.map(name => (
          <button
            disabled={name.id === filter ? true : false}
            key={name.id}
            id={name.id}
            onClick={this.handleFilterChange}
          >
            {name.name}
          </button>
        ))}
      </React.Fragment>
    );
  };

  render() {
    console.log('<Button/> render');
    return this.renderButtons();
  }
}

export default connect(
  null,
  { changeFilter }
)(Button);
