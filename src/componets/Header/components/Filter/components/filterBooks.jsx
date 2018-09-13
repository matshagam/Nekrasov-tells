import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterBooks = () => {
  return (
    <Context.Consumer>
      {({ filterSelectChanged }) => (
        <p onClick={filterSelectChanged} className="books">
          Книги
        </p>
      )}
    </Context.Consumer>
  );
};
