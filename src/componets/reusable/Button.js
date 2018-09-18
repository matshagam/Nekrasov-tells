import React from 'react';

export const Button = ({ name, toggleButton }) => {
  console.log('<Button/> render');

  return <button onClick={toggleButton}>{name}</button>;
};
