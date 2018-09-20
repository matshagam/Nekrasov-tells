import { CHANGE_FILTER } from '../actions/types';

export const filterState = {
  filter: ''
};

export const filterReducer = (state = filterState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.filter
      };

    default:
      return state;
  }
};
