import React from 'react';
import { Context } from '../../../store/ContextStore.jsx';

export const TileView = () => {
  return (
    <Context.Consumer>
      {({ changeView, onClickChangeView }) => {
        return (
          <div
            onClick={onClickChangeView}
            style={
              changeView
                ? { backgroundColor: '#fff' }
                : { backgroundColor: '#40677e', color: '#fff' }
            }
            className="aside-text tile"
          >
            Плитка
          </div>
        );
      }}
    </Context.Consumer>
  );
};
