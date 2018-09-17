import { TOGGLE_VIEW } from '../actions/ViewActions';

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
