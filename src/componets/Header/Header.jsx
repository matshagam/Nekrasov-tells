import React from 'react';
import logo from '../../assets/logo_nekrasovka.svg';

import { Search } from './components/Search';
import Filter from './components/Filter/Filter';

export const Header = ({ query, searchQueryChanged }) => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <section className="header-selection">
        <Search search={searchQueryChanged} query={query} />
        <Filter />
      </section>
    </header>
  );
};
