import React from 'react';

export const Button = ({ name, toggleButton }) => {
  return <button onClick={toggleButton}>{name}</button>;
};
