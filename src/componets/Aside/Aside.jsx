import React from 'react';

import { ListView } from './components/listView.jsx';
import { TileView } from './components/tileView.jsx';

export const Aside = () => {
  return (
    <aside className="aside">
      <ListView />
      <TileView />
    </aside>
  );
};
