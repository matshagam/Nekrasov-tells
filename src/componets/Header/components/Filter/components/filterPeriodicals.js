import React from 'react';

export const FilterPeriodicals = ({ name, onClick }) => {
  return <button onClick={onClick}>{name}</button>;
};

// <button onClick={onClickChangeFilter} className="periodicals">
//       Периодика
//     </button>
