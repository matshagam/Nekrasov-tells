import React from 'react';

import Button from './components/Button';

const ToggleView = () => {
  console.log('<ToggleView/> render');

  return (
    <aside className="aside">
      <Button />
    </aside>
  );
};

export default ToggleView;
