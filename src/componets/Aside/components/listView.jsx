import React from 'react';
import { Context } from '../../../store/ContextStore.jsx';

export const ListView = () => {
  return (
    <Context.Consumer>
      {({ onClickChangeView }) => {
        return (
          <div onClick={onClickChangeView} className="aside-text list active">
            Список
          </div>
        );
      }}
    </Context.Consumer>
  );
};
