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
    console.log(this);
  };

  renderButtons = () => {
    const filter = this.state.filter;

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

export default connect(
  null,
  { changeFilter }
)(Button);
