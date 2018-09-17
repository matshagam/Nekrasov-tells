import React from 'react';

export const Search = () => {
  return (
    <form className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Поисковая строка"
        // value={query}
        // onChange={searchQueryChanged}
      />
    </form>
  );
};
