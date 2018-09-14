import React from 'react';
import { Context } from '../../../store/ContextStore.jsx';

export const ListView = () => {
  return (
    <Context.Consumer>
      {({ onClickChangeView }) => {
        return (
          <button onClick={onClickChangeView} className="list">
            Список
          </button>
        );
      }}
    </Context.Consumer>
  );
};
