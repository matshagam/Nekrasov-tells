import React from 'react';
import { Context } from '../../../store/ContextStore.jsx';

export const ListView = () => {
  return (
    <Context.Consumer>
      {({ changeView, onClickChangeView }) => {
        return (
          <div
            onClick={onClickChangeView}
            style={
              !changeView
                ? { backgroundColor: '#fff' }
                : { backgroundColor: '#40677e', color: '#fff' }
            }
            className="aside-text list"
          >
            Список
          </div>
        );
      }}
    </Context.Consumer>
  );
};
