import { SEARCH } from '../actions/types';

export const initialState = {
  query: ''
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { ...state, query: action.query };

    default:
      return state;
  }
};
