import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterPeriodicals = () => {
  return (
    <Context.Consumer>
      {({ filterSelectChanged }) => (
        <p onClick={filterSelectChanged} className="periodicals">
          Периодика
        </p>
      )}
    </Context.Consumer>
  );
};
