import { SEARCH } from '../actions/types';

export const searchChanged = query => {
  console.log('query: ', query);
  return {
    type: SEARCH,
    payload: query
  };
};
