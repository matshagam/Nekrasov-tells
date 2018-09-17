import React from 'react';

import { ListView } from './components/listView';
import { TileView } from './components/tileView';

export const Aside = () => {
  return (
    <aside className="aside">
      <ListView />
      <TileView />
    </aside>
  );
};
