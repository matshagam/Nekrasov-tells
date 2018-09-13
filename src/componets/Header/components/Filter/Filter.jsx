import React from 'react';

import { FilterAnywhere } from './components/filterAnywhere.jsx';
import { FilterBooks } from './components/filterBooks.jsx';
import { FilterPeriodicals } from './components/filterPeriodicals.jsx';

export const Filter = () => {
  return (
    <section className="filter">
      <FilterAnywhere />
      <FilterBooks />
      <FilterPeriodicals />
    </section>
  );
};
