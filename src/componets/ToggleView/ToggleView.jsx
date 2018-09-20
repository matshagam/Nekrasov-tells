import React from 'react';

import ToggleButton from './components/ToggleButton';

const ToggleView = () => {
  console.log('<ToggleView/> render');

  return (
    <aside className="aside">
      <ToggleButton />
    </aside>
  );
};

export default ToggleView;
