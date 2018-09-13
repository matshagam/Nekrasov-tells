import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterAnywhere = () => {
  return (
    <Context.Consumer>
      {({ filterSelectChanged }) => (
        <p onClick={filterSelectChanged} className="anywhere">
          Везде
        </p>
      )}
    </Context.Consumer>
  );
};
