import React from 'react';
import { connect } from 'react-redux';
import { searchChanged } from '../../../actions/SearchAction';

class Search extends React.Component {
  searchQueryChanged = event => {
    this.props.searchChanged(event.target.value);
  };

  render() {
    const { search } = this.props.search;
    return (
      <form className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Поисковая строка"
          value={search}
          onChange={this.searchQueryChanged}
        />
      </form>
    );
  }
}

const mapStateToProps = store => ({
  search: store.search
});

export default connect(
  mapStateToProps,
  { searchChanged }
)(Search);
