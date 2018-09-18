import React from 'react';

import BookCard from './components/Book';

const Main = () => {
  console.log('<Main/> render');
  return (
    <main className="main">
      <BookCard />;
    </main>
  );
};

export default Main;
