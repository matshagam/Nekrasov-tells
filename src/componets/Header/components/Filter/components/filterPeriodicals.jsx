import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterPeriodicals = () => {
  return (
    <Context.Consumer>
      {({ filterSelectChanged }) => (
        <button onClick={filterSelectChanged} className="periodicals">
          Периодика
        </button>
      )}
    </Context.Consumer>
  );
};
