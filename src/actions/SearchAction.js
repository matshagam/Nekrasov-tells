import { SEARCH } from '../actions/types';

export const searchChanged = query => {
  return {
    type: SEARCH,
    payload: query
  };
};
