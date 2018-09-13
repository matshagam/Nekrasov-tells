import React from 'react';
import logo from '../assets/logo_nekrasovka.svg';

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header-logo" alt="logo" />
    </header>
  );
};
