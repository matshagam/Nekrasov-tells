import React from 'react';
import { Context } from '../../../../../store/ContextStore.jsx';

export const FilterBooks = () => {
  return (
    <Context.Consumer>
      {({ onClickChangeFilter }) => (
        <button onClick={onClickChangeFilter} className="books">
          Книги
        </button>
      )}
    </Context.Consumer>
  );
};
