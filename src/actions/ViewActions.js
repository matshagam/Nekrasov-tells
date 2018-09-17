import { TOGGLE_VIEW } from './types';

export const toggleView = listView => {
  return {
    type: TOGGLE_VIEW,
    payload: listView
  };
};
