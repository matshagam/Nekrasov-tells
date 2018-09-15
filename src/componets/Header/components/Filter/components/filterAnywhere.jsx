import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterAnywhere = () => {
  return (
    <Context.Consumer>
      {({ onClickChangeFilter }) => (
        <button onClick={onClickChangeFilter} className="anywhere active">
          Везде
        </button>
      )}
    </Context.Consumer>
  );
};
