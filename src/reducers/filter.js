import { CHANGE_FILTER } from '../actions/types';

const initialState = {
  filter: ''
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload
      };

    default:
      return state;
  }
};
