import React from 'react';

import Book from './components/Book';

const Main = () => {
  console.log('<Main/> render');

  return (
    <main className="main">
      <Book />;
    </main>
  );
};

export default Main;
