import React from 'react';
import { connect } from 'react-redux';

import { searchChanged } from '../../../actions/SearchAction';

class Search extends React.Component {
  searchQueryChanged = event => {
    const { value } = event.target;

    this.props.searchChanged(value);
  };

  render() {
    console.log('<Search/> render');

    return (
      <form className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Поисковая строка"
          onChange={this.searchQueryChanged}
        />
      </form>
    );
  }
}

export default connect(
  null,
  { searchChanged }
)(Search);
