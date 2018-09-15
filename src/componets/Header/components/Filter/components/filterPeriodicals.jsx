import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterPeriodicals = () => {
  return (
    <Context.Consumer>
      {({ onClickChangeFilter }) => (
        <button onClick={onClickChangeFilter} className="periodicals">
          Периодика
        </button>
      )}
    </Context.Consumer>
  );
};
