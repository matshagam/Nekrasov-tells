import React from 'react';

import Button from './components/button';

const Aside = () => {
  console.log('<Aside/> render');

  return (
    <aside className="aside">
      <Button />
    </aside>
  );
};

export default Aside;
