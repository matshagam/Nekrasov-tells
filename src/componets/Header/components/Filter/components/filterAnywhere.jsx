import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterAnywhere = () => {
  return (
    <Context.Consumer>
      {({ filterSelectChanged }) => (
        <button onClick={filterSelectChanged} className="anywhere active">
          Везде
        </button>
      )}
    </Context.Consumer>
  );
};
