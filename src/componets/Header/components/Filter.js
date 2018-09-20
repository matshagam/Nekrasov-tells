import React from 'react';

import FilterButton from './FilterButton';

const Filter = () => {
  console.log('<Filter/> render');

  return (
    <section className="filter">
      <FilterButton />
    </section>
  );
};

export default Filter;
