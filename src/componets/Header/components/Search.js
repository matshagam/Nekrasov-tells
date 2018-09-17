import React from 'react';

export const Search = ({ query, search }) => {
  return (
    <form className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Поисковая строка"
        value={query}
        onChange={search}
      />
    </form>
  );
};
