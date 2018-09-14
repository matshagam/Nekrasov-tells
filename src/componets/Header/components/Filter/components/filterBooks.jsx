import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterBooks = () => {
  return (
    <Context.Consumer>
      {({ filterSelectChanged }) => (
        <button onClick={filterSelectChanged} className="books">
          Книги
        </button>
      )}
    </Context.Consumer>
  );
};
