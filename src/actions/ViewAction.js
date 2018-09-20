import { LIST_VIEW } from '../actions/types';

export const changeView = boolean => {
  return {
    type: LIST_VIEW,
    listView: boolean
  };
};
