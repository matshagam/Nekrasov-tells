import { TOGGLE_VIEW } from '../actions/types';

export const initialState = {
  listView: false
};

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VIEW:
      return { ...state, listView: action.payload };
    default:
      return state;
  }
};
