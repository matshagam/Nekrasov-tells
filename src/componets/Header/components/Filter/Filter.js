import React from 'react';

import { FilterAnywhere } from './components/filterAnywhere';
import { FilterBooks } from './components/filterBooks';
import { FilterPeriodicals } from './components/filterPeriodicals';

export const Filter = () => {
  return (
    <section className="filter">
      <FilterAnywhere />
      <FilterBooks />
      <FilterPeriodicals />
    </section>
  );
};
