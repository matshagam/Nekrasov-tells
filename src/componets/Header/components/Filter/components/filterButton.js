import React from 'react';

export const FilterButton = ({ name, changeFilter }) => {
  return <button onClick={changeFilter}>{name}</button>;
};
