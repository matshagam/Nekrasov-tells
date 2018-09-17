import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../../../actions/FilterActions';

// import { FilterAnywhere } from './components/filterAnywhere';
// import { FilterBooks } from './components/filterBooks';
import { FilterPeriodicals } from './components/filterPeriodicals';

class Filter extends React.Component {
  handleFilterChange = e => {
    this.props.changeFilter(e.target.value);
    console.log('e.target.value: ', e.target.value);
  };

  render() {
    const { filter } = this.props.filter;
    return (
      <section className="filter">
        {filter.map((name, i) => {
          return (
            <FilterPeriodicals
              onClick={this.handleFilterChange}
              name={name}
              key={i}
            />
          );
        })}
      </section>
    );
  }
}

const mapStateToProps = store => ({
  filter: store.filter
});

export default connect(
  mapStateToProps,
  { changeFilter }
)(Filter);
