import React from 'react';

import Button from './components/button';

const ToggleView = () => {
  console.log('<Aside/> render');

  return (
    <aside className="aside">
      <Button />
    </aside>
  );
};

export default ToggleView;
