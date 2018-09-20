import { CHANGE_VIEW } from '../actions/types';

export const changeView = boolean => {
  return {
    type: CHANGE_VIEW,
    listView: boolean
  };
};
