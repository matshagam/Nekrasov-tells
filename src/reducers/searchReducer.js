import { SEARCH } from '../actions/types';

export const initialState = {
  search: ''
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, search: action.payload };

    default:
      return state;
  }
};
