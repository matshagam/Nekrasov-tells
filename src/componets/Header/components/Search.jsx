import React from 'react';
import { Context } from '../../../store/ContextStore';

export const Search = () => {
  return (
    <Context.Consumer>
      {({ query, searchQueryChanged }) => (
        <form className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Поисковая строка"
            value={query}
            onChange={searchQueryChanged}
          />
        </form>
      )}
    </Context.Consumer>
  );
};
