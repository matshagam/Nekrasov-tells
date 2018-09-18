import { LIST_VIEW } from '../actions/types';

export const initialState = {
  listView: false
};

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_VIEW:
      return { ...state, listView: action.payload };

    default:
      return state;
  }
};
