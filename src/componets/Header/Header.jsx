import React from 'react';

import logo from '../../assets/logo_nekrasovka.svg';
import Search from './components/Search.jsx';
import Filter from './components/Filter.jsx';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
      <section className="header-selection">
        <Search />
        <Filter />
      </section>
    </header>
  );
};
export default Header;
