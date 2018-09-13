import React from 'react';
import { Context } from '../store/ContextStore.jsx';

export const Search = () => {
  return (
    <Context.Consumer>
      {({ query, handleChange }) => (
        <form className="search">
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={handleChange}
          />
        </form>
      )}
    </Context.Consumer>
  );
};
