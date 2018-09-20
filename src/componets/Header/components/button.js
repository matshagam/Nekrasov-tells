import React from 'react';

import { connect } from 'react-redux';

import { changeFilter } from '../../../actions/FilterAction';

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
    const FILTER = [
      { id: 1, name: 'Везде' },
      { id: 2, name: 'Книги' },
      { id: 3, name: 'Периодика' }
    ];

    return (
      <React.Fragment>
        {FILTER.map(({ id, name }) => (
          <button
            ref={'button' + id}
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
